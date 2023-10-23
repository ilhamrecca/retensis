"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Retenses", "RTUid", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Rtus", // Replace with the actual name of the "Rtu" table
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Retenses", "RTUid");
  },
};
