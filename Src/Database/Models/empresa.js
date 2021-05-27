const Sequelize = require('sequelize');
const db = require("../dbConexion");
module.exports = function(sequelize, DataTypes) {
  return db.define('empresa', {
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_empresa: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    representante: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tlf_contacto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ruc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idempresa" },
        ]
      },
    ]
  });
};
