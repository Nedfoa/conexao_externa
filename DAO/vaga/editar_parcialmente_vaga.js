import { conexao } from "../conexao.js";

async function editarParcialmenteVaga(id_vaga, campo, valor) {

    const data = [valor, id_vaga]

    const colunasPermitidas = ['tipo', 'statuss'];

    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE vaga SET ${campo} = ? WHERE id_vaga = ?;`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarParcialmenteVaga }