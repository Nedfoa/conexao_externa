import { conexao } from "../conexao.js"

async function buscarRegistros() {
    console.log('DAO de REGISTRO')

    const sql = `SELECT * FROM registro;`

    const conn = await conexao()

    try {
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

async function buscarRegistro(codigo) {

    const sql = `SELECT * FROM registro WHERE codigo = ?`

    const conn = await conexao()

    try {
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

export { buscarRegistros, buscarRegistro }