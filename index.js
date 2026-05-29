
import express from 'express'
import { buscarProprietario, buscarProprietarios } from './DAO/proprietario/buscar_proprietario.js'
import { deletarProprietario } from './DAO/proprietario/deletar_proprietario.js'
import { editarIntegralmenteProprietario } from './DAO/proprietario/editar_integralmente_proprietario.js'
import { editarParcialmenteProprietario } from './DAO/proprietario/editar_parcialmente_proprietario.js'
import { inserirProprietario } from './DAO/proprietario/inserir_proprietario.js'
import { buscarRegistro, buscarRegistros } from './DAO/registro/buscar_registro.js'
import { deletarRegistro } from './DAO/registro/deletar_registro.js'
import { editarIntegralmenteRegistro } from './DAO/registro/editar_integralmente_registro.js'
import { inserirRegistro } from './DAO/registro/inserir_registro.js'
import { buscarVaga, buscarVagas } from './DAO/vaga/buscar_vaga.js'
import { deletarVaga } from './DAO/vaga/deletar_vaga.js'
import { editarIntegralmenteVaga } from './DAO/vaga/editar_integralmente_vaga.js'
import { editarParcialmenteVaga } from './DAO/vaga/editar_parcialmente_vaga.js'
import { inserirVaga } from './DAO/vaga/inserir_vaga.js'
import { buscarVeiculo, buscarVeiculos } from './DAO/veiculo/buscar_veiculo.js'
import { deletarVeiculo } from './DAO/veiculo/deletar_veiculo.js'
import { editarIntegralmenteVeiculo } from './DAO/veiculo/editar_integralmente_veiculo.js'
import { editarParcialmenteVeiculo } from './DAO/veiculo/editar_parcialmente_veiculo.js'
import { inserirVeiculo } from './DAO/veiculo/inserir_veiculo.js'


const app = express()
app.use(express.json())


// buscar um ou todos os proprietarios
app.get('/buscarProprietario', async (req, res) => {
    try {
        const proprietario = await buscarProprietario()
        res.json(proprietario)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.get('/buscarProprietarios', async (req, res) => {
    try {
        const proprietario = await buscarProprietarios()
        res.json(proprietario)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})



//deletar proprietario
app.delete('/deletarProprietario/:cpf', async (req, res) => {
    try {
        const {cpf} = req.params

        const proprietario = await deletarProprietario(cpf)

        res.json(proprietario)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// editar registro integralmente
app.put('/editarIntegralmenteRegistro/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params

        const infos = [
            req.body.dataEntrada,
            req.body.horarioEntrada,
            req.body.dataSaida,
            req.body.horarioSaida,
            req.body.id_proprietario
        ]

        const registro = await editarIntegralmenteRegistro(infos, codigo)

        res.json(registro)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


//editar proprietario parcialmente
app.patch('/editarParcialmenteProprietario/:cpf', async (req, res) => {
    try {
        const {cpf} = req.params
        const {valor, campo} = req.body

        const proprietario = await editarParcialmenteProprietario(cpf, campo, valor)

        res.json(proprietario)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

//Inserir proprietario
app.post('/inserirProprietario', async (req, res) => {
    try {
        const infos = [
            req.body.cpf,
            req.body.nome,
            req.body.endereco,
            req.body.telefone,
            req.body.email,
            req.body.genero
        ]

        const proprietario = await inserirProprietario(infos)

        res.json(proprietario)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

//---------------------------------------------------------------------------------------------//


// buscar um registro
app.get('/buscarRegistro/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params
        const registro = await buscarRegistro(codigo)
        res.json(registro)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

// buscar todos os registros
app.get('/buscarRegistros', async (req, res) => {
    try {
        const registros = await buscarRegistros()
        res.json(registros)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// deletar registro
app.delete('/deletarRegistro/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params

        const registro = await deletarRegistro(codigo)

        res.json(registro)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

// editar registro integralmente
app.put('/editarIntegralmenteRegistro/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params

        const infos = [
            req.body.dataEntrada,
            req.body.horarioEntrada,
            req.body.dataSaida,
            req.body.horarioSaida,
            req.body.id_proprietario
        ]

        const registro = await editarIntegralmenteRegistro(infos, codigo)

        res.json(registro)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

// editar registro parcialmente
app.patch('/editarParcialmenteRegistro/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params
        const { valor, campo } = req.body

        const registro = await editarParcialmenteRegistro(codigo, campo, valor)

        res.json(registro)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

// Inserir registro
app.post('/inserirRegistro', async (req, res) => {
    try {
        const infos = [
            req.body.codigo,
            req.body.dataEntrada,
            req.body.horarioEntrada,
            req.body.dataSaida,
            req.body.horarioSaida,
            req.body.id_proprietario
        ]

        const registro = await inserirRegistro(infos)

        res.json(registro)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


//---------------------------------------------------------------------------------------------//


// buscar uma vaga
app.get('/buscarVaga/:id_vaga', async (req, res) => {
    try {
        const { id_vaga } = req.params

        const vaga = await buscarVaga(id_vaga)

        res.json(vaga)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

// buscar todas as vagas
app.get('/buscarVagas', async (req, res) => {
    try {
        const vagas = await buscarVagas()

        res.json(vagas)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// deletar vaga
app.delete('/deletarVaga/:id_vaga', async (req, res) => {
    try {
        const { id_vaga } = req.params

        const vaga = await deletarVaga(id_vaga)

        res.json(vaga)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// editar vaga integralmente
app.put('/editarIntegralmenteVaga/:id_vaga', async (req, res) => {
    try {
        const { id_vaga } = req.params

        const infos = [
            req.body.tipo,
            req.body.statuss
        ]

        const vaga = await editarIntegralmenteVaga(infos, id_vaga)

        res.json(vaga)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// editar vaga parcialmente
app.patch('/editarParcialmenteVaga/:id_vaga', async (req, res) => {
    try {
        const { id_vaga } = req.params
        const { valor, campo } = req.body

        const vaga = await editarParcialmenteVaga(id_vaga, campo, valor)

        res.json(vaga)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


// Inserir vaga
app.post('/inserirVaga', async (req, res) => {
    try {
        const infos = [
            req.body.tipo,
            req.body.statuss
        ]

        const vaga = await inserirVaga(infos)

        res.json(vaga)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})



//---------------------------------------------------------------------------------------------//


//Buscar veiculo
app.get('/buscarVeiculo/:placa', async (req, res) => {
    try {
        const { placa } = req.params

        const veiculo = await buscarVeiculo(placa)

        res.json(veiculo)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.get('/buscarVeiculos', async (req, res) => {
    try {
        const veiculos = await buscarVeiculos()

        res.json(veiculos)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})



// deletar veiculo

app.delete('/deletarVeiculo/:placa', async (req, res) => {
    try {
        const { placa } = req.params

        const veiculo = await deletarVeiculo(placa)

        res.json(veiculo)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})


//editar integralmente veiculo
app.put('/editarIntegralmenteVeiculo/:placa', async (req, res) => {
    try {
        const { placa } = req.params

        const infos = [
            req.body.modelo,
            req.body.ano,
            req.body.cor,
            req.body.marca
        ]

        const veiculo = await editarIntegralmenteVeiculo(infos, placa)

        res.json(veiculo)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

//editar parcialmente veiculo
app.patch('/editarParcialmenteVeiculo/:placa', async (req, res) => {
    try {
        const { placa } = req.params
        const { valor, campo } = req.body

        const veiculo = await editarParcialmenteVeiculo(
            placa,
            campo,
            valor
        )

        res.json(veiculo)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

//inserir veiculo
app.post('/inserirVeiculo', async (req, res) => {
    try {

        const infos = [
            req.body.placa,
            req.body.modelo,
            req.body.ano,
            req.body.cor,
            req.body.marca
        ]

        const veiculo = await inserirVeiculo(infos)

        res.json(veiculo)

    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})







//testes

app.get('/', (req, res) =>{
    res.json('Ola Mundo ...')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})







