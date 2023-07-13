import { Sequelize } from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('bw9yglakrjdohml4h83y', 'urbgc7jw8qbh9ycn', 'urbgc7jw8qbh9ycn', {
    host:'bw9yglakrjdohml4h83y-mysql.services.clever-cloud.com',
    dialect:'mysql'
});
export default db;
