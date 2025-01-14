'use strict';
module.exports = (sequelize, DataTypes) => {
  const CocktailQ = sequelize.define('CocktailQ', {
    question: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  CocktailQ.associate = function(models) {
    // associations can be defined here
    CocktailQ.belongsTo(models.User, {foreignKey: 'userId'});
    CocktailQ.hasMany(models.CocktailA, {foreignKey: 'cocktailQId'});
  };
  return CocktailQ;
};
