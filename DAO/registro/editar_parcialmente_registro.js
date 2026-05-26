import { conexao } from "../conexao.js";

async function editarParcialmenteRegistro(codigo, campo, valor) {

    const data = [valor, codigo]

    const colunasPermitidas = [
        'dataEntrada',
        'horarioEntrada',
        'dataSaida',
        'horarioSaida',
        'id_proprietario'
    ];

    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE registro SET ${campo} = ? WHERE codigo = ?;`

    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

export { editarParcialmenteRegistro }