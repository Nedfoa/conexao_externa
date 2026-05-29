import { conexao } from "../conexao.js";

async function deletarVaga(id_vaga) {

    const sql = `DELETE FROM vaga WHERE id_vaga = ?`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [id_vaga]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { deletarVaga }