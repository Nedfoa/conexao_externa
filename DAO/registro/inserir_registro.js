import { conexao } from "../conexao.js";

async function inserirRegistro(infos) {

    const data = [infos]

    const sql = `
        INSERT INTO registro
        (codigo, dataEntrada, horarioEntrada, dataSaida, horarioSaida, id_proprietario)
        VALUES ?
    `

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [data]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { inserirRegistro }