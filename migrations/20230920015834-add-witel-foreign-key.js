"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Rtus", {
      name: "WitelIDFK",
      fields: ["witelID"],
      type: "foreign key",
      references: {
        table: "Witels", // Replace 'Witel' with the actual table name
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Rtus", "WitelIDFK");
  },
};
