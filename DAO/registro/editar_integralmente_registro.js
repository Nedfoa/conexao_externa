import { conexao } from "../conexao.js";

async function editarIntegralmenteRegistro(infos, codigo) {

    const sql = `
        UPDATE registro
        SET dataEntrada = ?, 
            horarioEntrada = ?, 
            dataSaida = ?, 
            horarioSaida = ?, 
            id_proprietario = ?
        WHERE codigo = ?;
    `

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, codigo]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarIntegralmenteRegistro }