"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const witel = [
      {
        name: "WITEL DENPASAR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL SURABAYA SELATAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL SINGARAJA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL KEDIRI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL NTB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL PASURUAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL SIDOARJO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL JEMBER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL SURABAYA UTARA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL MALANG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL MADIUN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL MADURA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WITEL NTT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Witels", witel, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Witels", null, {});
  },
};
