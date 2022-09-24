import { connect, connection } from 'mongoose';
const MONGO_DB = process.env.MONGO_DB;

const conn = {
    isConnnected: false
}

export const dbConnect = async () => {
    if (conn.isConnnected) return;

    const db = await connect(MONGO_DB);
    conn.isConnnected = db.connections[0].readyState;
    // console.log('connected to ',db.connection.db.databaseName);

}

connection.on("connected", () => {
    // console.log("MongoDB is connected")
})

connection.on("error", (err) => {
    // console.log(err)
})








// module.exports = {
//     conn: mongoose,
// };
