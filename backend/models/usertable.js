'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usertable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate({BookTranscation}) {
      // define association here
      this.hasMany(BookTranscation,{
        foreignKey:"UserId"
      })}
  };
  usertable.init({
    UserId:
    {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
      
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
  
  }, {
    sequelize,
    modelName: 'usertable',
    tableName:'Usertables'
  });
  return usertable;
};