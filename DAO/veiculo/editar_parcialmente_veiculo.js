import { conexao } from "../conexao.js";

async function editarParcialmenteVeiculo(placa, campo, valor) {

    const data = [valor, placa]

    const colunasPermitidas = [
        'modelo',
        'ano',
        'cor',
        'marca'
    ];

    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE veiculo SET ${campo} = ? WHERE placa = ?;`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarParcialmenteVeiculo }