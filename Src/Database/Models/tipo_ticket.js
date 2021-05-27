const Sequelize = require('sequelize');
const db = require("../dbConexion");
module.exports = function(sequelize, DataTypes) {
  return db.define('tipo_ticket', {
    idtipo_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipo_ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtipo_ticket" },
        ]
      },
    ]
  });
};
