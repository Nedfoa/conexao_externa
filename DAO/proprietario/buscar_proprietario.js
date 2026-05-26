import { conexao } from "../conexao.js"


async function buscarProprietarios(){
  console.log('DAO de PROPRIETÁRIO')
    const sql = `SELECT * FROM proprietario;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarProprietario(codigo){
    const sql = `SELECT * FROM proprietario WHERE cpf = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


export {buscarProprietarios, buscarProprietario}