import { conexao } from "../conexao.js";

async function inserirVeiculo(infos) {

    const data = [infos]

    const sql = `
        INSERT INTO veiculo
        (placa, modelo, ano, cor, marca)
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

export { inserirVeiculo }