'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookTranscation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
      static associate({usertable}) {
        this.belongsTo(usertable, {foreignKey: "UserId"});
    }
    static associate({Bookdetails}) {
      this.belongsTo(Bookdetails, {foreignKey: "BookId"});
  }
  };
  BookTranscation.init({
    TranscationId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    UserId:{
      type: DataTypes.INTEGER
    },
    BookId:{
      type: DataTypes.INTEGER
    },
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
      type:DataTypes.DATE}
  }, 
  {
    sequelize,
    modelName: 'BookTranscation',
  });
  return BookTranscation;
};