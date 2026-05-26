import { conexao } from "../conexao.js";

async function inserirProprietario(infos){
    const data = [infos]
    const sql = `INSERT INTO proprietario (cpf, nome, endereco, telefone, email, genero) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {inserirProprietario}