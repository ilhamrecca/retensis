"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the HargaKWH column
    await queryInterface.addColumn("Rtus", "HargaKWH", {
      type: Sequelize.INTEGER,
      allowNull: true, // Modify as needed
    });

    // Add the tipe kontrak column
    await queryInterface.addColumn("Rtus", "tipeKontrak", {
      type: Sequelize.STRING,
      allowNull: true, // Modify as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the HargaKWH column
    await queryInterface.removeColumn("Rtus", "HargaKWH");

    // Remove the tipe kontrak column
    await queryInterface.removeColumn("Rtus", "tipeKontrak");
  },
};
