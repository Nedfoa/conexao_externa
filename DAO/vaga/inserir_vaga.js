import { conexao } from "../conexao.js";

async function inserirVaga(infos) {

    const data = [infos]

    const sql = `INSERT INTO vaga (tipo, statuss) VALUES ?`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [data]);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { inserirVaga }