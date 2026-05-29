import { conexao } from "../conexao.js";

async function editarIntegralmenteVaga(infos, id_vaga) {

    const sql = `
        UPDATE vaga
        SET tipo = ?, statuss = ?
        WHERE id_vaga = ?;
    `

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, id_vaga]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarIntegralmenteVaga }