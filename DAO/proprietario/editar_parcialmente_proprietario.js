import { conexao } from "../conexao.js";

async function editarParcialmenteProprietario(cpf, campo, valor){
    const data = [valor, cpf]
    
    const colunasPermitidas = ['endereco', 'telefone', 'email']; // Adicione as colunas permitidas
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE proprietario set ${campo} = ? WHERE cpf = ? ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {editarParcialmenteProprietario}