const Sequelize = require('sequelize');
const db = require("../dbConexion");
module.exports = function(sequelize, DataTypes) {
  return db.define('contacto', {
    idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_contacto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    email_contacto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tlf_contacto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contacto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcontacto" },
        ]
      },
      {
        name: "id_empresa_idx",
        using: "BTREE",
        fields: [
          { name: "empresa" },
        ]
      },
    ]
  });
};
