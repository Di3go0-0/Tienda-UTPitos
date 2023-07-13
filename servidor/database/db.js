import { Sequelize } from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('bysnmbtrbyjbcaad1hqq', 'uhzngho6brgx4eto', 'N67KdhXVETNQmJMzbHSc', {
    host : 'bysnmbtrbyjbcaad1hqq-mysql.services.clever-cloud.com',
    dialect:'mysql'
});
export default db;
