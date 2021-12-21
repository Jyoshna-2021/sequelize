'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('BookTranscations', {

     TranscationId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    UserId:{
      type: DataTypes.INTEGER,
      
    },
    BookId:{
    
    type:DataTypes.INTEGER},
    BookName:{
      type:DataTypes.STRING
    },
    
    IssueDate:{
  type:DataTypes.DATE},

    duedate:
    {
      type:DataTypes.DATE
    },
    renewdate:{ 
      type:DataTypes.DATE
    },
      createdAt: {
        allowNull: false,
        type: DataType.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('BookTranscations');
  }
};