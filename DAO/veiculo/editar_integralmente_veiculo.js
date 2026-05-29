import { conexao } from "../conexao.js";

async function editarIntegralmenteVeiculo(infos, placa) {

    const sql = `
        UPDATE veiculo
        SET modelo = ?, ano = ?, cor = ?, marca = ?
        WHERE placa = ?;
    `

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, placa]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarIntegralmenteVeiculo }