"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@mail.com",
          fullName: "Admin",
          password:
            "$2b$10$ceM65e803i8CIM4UOwP2rO6RyMZi/CC8gr3ngCN0PwL/jwTn5oSO6",
          role: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {})
  },
}
