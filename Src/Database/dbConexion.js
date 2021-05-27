const { Sequelize } = require('sequelize');
try {
    const conecction = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        logging: false,
        dialectOptions: {
            options: {
                validateBulkLoadParameters: true,
                encrypt: false,
                trustServerCertificate: false,
                // hostNameInCertificate: '*.database.windows.net',
                loginTimeout: 30,
            },
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    conecction.authenticate()
        .then(() => console.log('Se establecio Conexion con la Base de Datos.'))
        .catch(err => console.log('Error:' + err))

} catch (error) {
    console.log(error);
}

module.exports = conecction;