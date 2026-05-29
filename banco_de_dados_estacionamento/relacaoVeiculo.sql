create database relacaoVeiculo;
use relacaoVeiculo;


CREATE TABLE proprietario (
    cpf varchar(20) PRIMARY KEY,
    nome varchar (30) not null,
    endereco varchar(100),
    telefone varchar(15),
    email varchar(110),
    genero int
    
);


CREATE TABLE vaga (
    id_vaga int primary key AUTO_INCREMENT,
    tipo varchar(50) not null,
    statuss int
);


CREATE TABLE veiculo (
    placa varchar(8) PRIMARY KEY,
    modelo varchar(150),
    ano INT,
    cor varchar(15),
	marca varchar(50) 
);


CREATE TABLE registro (
    codigo INT PRIMARY KEY,
    dataEntrada int,
    horarioEntrada int,
    dataSaida int,
    horarioSaida int,
    id_proprietario varchar(20),
    FOREIGN KEY (id_proprietario) REFERENCES proprietario (cpf)
);




INSERT INTO proprietario (cpf, nome, endereco, telefone, email, genero) VALUES 
('12345678901', 'João Silva', 'Rua das Flores, 123, São Paulo', '11987654321', 'joao.silva@email.com', 1),
('23456789012', 'Maria Oliveira', 'Avenida Brasil, 456, Rio de Janeiro', '21987654321', 'maria.oliveira@email.com', 2),
('34567890123', 'Carlos Souza', 'Praça da Sé, 789, Salvador', '71987654321', 'carlos.souza@email.com', 1),
('45678901234', 'Ana Pereira', 'Rua XV de Novembro, 101, Curitiba', '41987654321', 'ana.pereira@email.com', 2);

INSERT INTO Vaga (tipo, statuss) VALUES
('Estacionamento Coberto', 0),
('Estacionamento Descoberto', 1),
('Garagem Privativa', 0),
('Vaga para Deficiente', 1),
('Vaga VIP', 0);


INSERT INTO Veiculo (placa, modelo, ano, cor, marca) VALUES
('ABC1234', 'Civic LX', 2018, 'Preto', 'Honda'),
('DEF5678', 'Corolla GLI', 2020, 'Prata', 'Toyota'),
('GHI9012', 'Gol 1.0', 2015, 'Branco', 'Volkswagen'),
('JKL3456', 'Onix LT', 2021, 'Vermelho', 'Chevrolet'),
('MNO7890', 'Fiesta SE', 2017, 'Azul', 'Ford');

INSERT INTO registro (codigo, dataEntrada, horarioEntrada, dataSaida, horarioSaida, id_proprietario) VALUES
(1, 20260520, 800, 20260520, 1730, '12345678901'),
(2, 20260521, 915, 20260521, 1800, '23456789012'),
(3, 20260522, 730, 20260522, 1645, '34567890123'),
(4, 20260523, 845, 20260523, 1900, '45678901234'),
(5, 20260524, 1000, 20260524, 2000, '12345678901');



drop table registro;
drop table proprietario;