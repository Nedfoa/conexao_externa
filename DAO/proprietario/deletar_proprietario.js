import { conexao } from "../conexao.js";

async function deletarProprietario(cpf){
    
    const sql = `DELETE FROM proprietario WHERE cpf = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[cpf]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {deletarProprietario}
