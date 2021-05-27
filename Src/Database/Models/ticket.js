const Sequelize = require('sequelize');
const db = require("../dbConexion");
module.exports = function(sequelize, DataTypes) {
  return db.define('ticket', {
    idticket: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_ticket',
        key: 'idtipo_ticket'
      }
    },
    contacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacto',
        key: 'idcontacto'
      }
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    creado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    terminado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    operador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'operador',
        key: 'idoperador'
      }
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'empresa',
        key: 'idempresa'
      }
    }
  }, {
    sequelize,
    tableName: 'ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idticket" },
        ]
      },
      {
        name: "id_tipo_ticket_idx",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
      {
        name: "id_operador_idx",
        using: "BTREE",
        fields: [
          { name: "operador" },
        ]
      },
      {
        name: "id_empresa_idx",
        using: "BTREE",
        fields: [
          { name: "empresa" },
        ]
      },
      {
        name: "id_contacto_idx",
        using: "BTREE",
        fields: [
          { name: "contacto" },
        ]
      },
    ]
  });
};
