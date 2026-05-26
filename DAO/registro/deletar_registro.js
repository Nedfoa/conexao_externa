import { conexao } from "../conexao.js";

async function deletarRegistro(codigo) {

    const sql = `DELETE FROM registro WHERE codigo = ?`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [codigo]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { deletarRegistro }