import { conexao } from "../conexao.js";

async function deletarVeiculo(placa) {

    const sql = `DELETE FROM veiculo WHERE placa = ?`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [placa]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { deletarVeiculo }