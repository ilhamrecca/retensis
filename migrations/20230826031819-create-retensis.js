"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Retenses",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        activePower_R: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        activePower_S: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        activePower_T: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        activePowerTotal: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        fetchTime: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        vAverage: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        iAverage: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        frequency: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        BBM: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Retenses");
  },
};
