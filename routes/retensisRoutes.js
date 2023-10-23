const router = require("express").Router();
const retensisController = require("../controllers/retensisController");
//get RTU and Witel
router.get("/getRtuList", retensisController.getRtuList);
router.get("/getRtuByWitel/", retensisController.getRtuByWitel);
router.get("/getWitelList", retensisController.getWitelList);

//insert RTU and Power
router.put("/insertRtu", retensisController.insertRtu);
router.put("/insertPowerData", retensisController.insertPowerData);

//get Power Data
router.post(
  "/getHourlyPowerData/:rtuID",
  retensisController.getHourlyPowerData
);

router.post("/getKWHDaily/:rtuID", retensisController.getKWHDaily);
router.post("/getKWHMonthly/:rtuID", retensisController.getKWHMonthly);
module.exports = router;
