import { conexao } from "../conexao.js";


async function editarIntegralmenteProprietario(infos, cpf){

    const sql = `UPDATE proprietario SET nome = ?, endereco = ?, telefone = ?, email = ?, genero = ? WHERE cpf =? ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos, cpf]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {editarIntegralmenteProprietario} 