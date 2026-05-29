import { conexao } from "../conexao.js";

async function buscarVeiculos() {

    const sql = `SELECT * FROM veiculo;`

    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

async function buscarVeiculo(placa) {

    const sql = `SELECT * FROM veiculo WHERE placa = ?`

    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql, [placa]);
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

export { buscarVeiculos, buscarVeiculo }