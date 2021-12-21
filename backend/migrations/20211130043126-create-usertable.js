'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('usertable', {
      UserId:
    {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      
    },
    UserName:
    {
      type:DataTypes.STRING,
      allowNull:false  
    },
    MobileNumber:
    {
      type:DataTypes.BIGINT 
    },
    emailid:
     {
        type:DataTypes.STRING,
       allowNull:false
      },
    Organization: 
    {
        type:DataTypes.STRING,
           allowNull:false
    },
    password: 
    { type:DataTypes.STRING,
      allowNull:false
    }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('usertable');
  }
};