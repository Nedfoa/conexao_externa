import { conexao } from "../conexao.js";

async function buscarVagas() {
    console.log('DAO de VAGA')

    const sql = `SELECT * FROM vaga;`

    const conn = await conexao()

    try {
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

async function buscarVaga(codigo) {

    const sql = `SELECT * FROM vaga WHERE id_vaga = ?`

    const conn = await conexao()

    try {
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

export { buscarVagas, buscarVaga }