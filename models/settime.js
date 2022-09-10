'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage 
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  SetTime.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    set_start_time: DataTypes.DATE,
    set_end_time: DataTypes.DATE,
    set_time_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};