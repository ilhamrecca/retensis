const { Witel, Rtu, Retensis } = require("../models");
const { Op, Sequelize } = require("sequelize");

class RetensisController {
  static async getWitelList(req, res, next) {
    try {
      const witelList = await Witel.findAll();

      res.status(200).json({
        success: true,
        witelList,
      });
    } catch (error) {
      console.error("Error fetching Witel data:", error);
      next(error);
    }
  }

  static async getRtuList(req, res, next) {
    try {
      const rtuList = await Rtu.findAll();
      console.log(rtuList);
      res.status(200).json({
        success: true,
        rtuList,
      });
    } catch (error) {
      console.error("Error fetching Rtu data:", error);
      next(error);
    }
  }

  static async getRtuByWitel(req, res, next) {
    try {
      // const { witelID } = req.params;
      const witel = await Witel.findAll({
        include: Rtu, // Include the associated Rtu records
      });

      if (!witel) {
        throw "Witel not Found"; // Witel not found
      }

      res.status(200).json({
        success: true,
        witel,
      });
    } catch (error) {
      console.error("Error fetching Rtu data:", error);
      next(error);
    }
  }

  static async insertRtu(req, res, next) {
    try {
      const rtuData = {
        name: req.body.name,
        ipAddress: req.body.ipAddress,
        witelID: req.body.witelID, // Replace with the actual Witel ID
        hargaKWH: req.body.hargaKWH,
        tipeKontrak: req.body.tipeKontrak,
      };

      console.log(rtuData);
      // Create a new Rtu record and store it in a variable
      const newRtu = await Rtu.create(rtuData);

      console.log("New Rtu record created:", newRtu.toJSON());
      res.status(200).json({
        success: true,
        newRtu: newRtu.toJSON(),
      });
    } catch (error) {
      console.error("Error fetching Rtu data:", error);
      next(error);
    }
  }

  static async insertPowerData(req, res, next) {
    try {
      let date = new Date();
      date = date.setHours(date.getHours() + 8);

      const power = {
        RTUid: req.body.RTUid,
        activePowerTotal: req.body.activePowerTotal / 100,
        activePower_R: req.body.activePower_R / 100,
        activePower_S: req.body.activePower_S / 100,
        activePower_T: req.body.activePower_T / 100,
        vAverage: req.body.vAverage / 10,
        iAverage: req.body.iAverage / 10,
        frequency: req.body.frequency / 10,
        BBM: req.body.BBM,
        fetchTime: date,
      };
      console.log(power);
      const newData = await Retensis.create(power);
      res.status(201).json({
        success: true,
        newData,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getHourlyPowerData(req, res, next) {
    try {
      let startDate = new Date(req.body.startDate);
      startDate = startDate.setHours(startDate.getHours() + 8);
      let endDate = new Date(req.body.endDate);
      endDate = endDate.setHours(endDate.getHours() + 8);
      const { rtuID } = req.params;
      let query = {
        attributes: [
          "activePower_S",
          "activePower_T",
          "activePower_R",
          "activePowerTotal",
          "vAverage",
          "iAverage",
          "frequency",
          "BBM",
          "fetchTime",
        ],
        where: {
          fetchTime: {
            [Op.between]: [startDate, endDate],
          },
          rtuID,
        },
      };

      let data = await Retensis.findAll(query);
      let formattedData = data.map((data) => {
        let date = new Date(data.fetchTime);

        // date = date.setHours(date.getHours - 8);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const formattedTimestamp = `${year}:${month}:${day} ${hours}:${minutes}:${seconds}`;

        return {
          activePowerTotal: data.activePowerTotal,
          activePower_R: data.activePower_R,
          activePower_S: data.activePower_S,
          activePower_T: data.activePower_T,
          vAverage: data.vAverage,
          iAverage: data.iAverage,
          frequency: data.frequency,
          BBM: data.BBM,
          year: formattedTimestamp,
        };
      });
      res.status(200).json(formattedData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getKWHDaily(req, res, next) {
    try {
      const targetYear = req.body.targetYear;
      const targetMonth = req.body.targetMonth;
      const { rtuID } = req.params;
      const query = {
        attributes: [
          [Sequelize.fn("DATE", Sequelize.col("fetchTime")), "date"],
          [
            Sequelize.fn("AVG", Sequelize.col("activePowertotal")),
            "averageValue",
          ],
        ],
        where: {
          [Sequelize.Op.and]: [
            Sequelize.literal(
              `YEAR(fetchTime) = ${targetYear} AND MONTH(fetchTime) = ${targetMonth}`
            ),
            {
              rtuID, // Replace with the actual rtuID value you want to filter by
            },
          ],
        },
        group: [Sequelize.fn("DATE", Sequelize.col("fetchTime"))],
      };

      let data = await Retensis.findAll(query);

      let formattedData = data.map((data) => {
        return {
          date: data.dataValues.date,
          averageValue: Number(
            (Number(data.dataValues.averageValue) * 24).toFixed(2)
          ),
        };
      });

      res.status(200).json(formattedData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getKWHMonthly(req, res, next) {
    try {
      const columnName = "activePowerTotal";
      const timestampColumnName = "fetchTime";

      const startTime = 18; // 6:00 PM
      const endTime = 22; // 10:00 PM

      const startDate = new Date(); // Assuming current date
      startDate.setMonth(req.body.chosenMonth); // August (0-indexed month)
      startDate.setDate(1); // 1st day of the month

      const { rtuID } = req.params;

      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 1);

      const query = {
        attributes: [
          [Sequelize.fn("AVG", Sequelize.col(columnName)), "averageValue"],
        ],
        where: {
          rtuID,
          [timestampColumnName]: {
            [Op.between]: [startDate, endDate],
          },
          [Op.or]: [
            Sequelize.where(
              Sequelize.fn("HOUR", Sequelize.col(timestampColumnName)),
              {
                [Op.notBetween]: [startTime, endTime],
              }
            ),
            { [timestampColumnName]: null },
          ],
        },
      };

      let data = await Retensis.findAll(query);

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // Months are zero-indexed, so add 1
      const daysInMonth = new Date(year, month, 0).getDate();
      let formattedData = data.map((data) => {
        let kwh = Number(data.dataValues.averageValue) * 20 * daysInMonth;
        kwh = Number(kwh.toFixed(2));
        let EstimatedCost = kwh * 1500;
        let ppn = 0.11 * EstimatedCost;
        let ppj = 0.1 * EstimatedCost;

        EstimatedCost += ppn + ppj;
        return {
          year: year,
          month: month,
          kwh: kwh,
          EstimatedCost,
        };
      });
      res.status(200).json(formattedData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = RetensisController;
