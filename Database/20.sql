-- 1) Imobiliária

CREATE DATABASE Imobiliaria;
GO

USE Imobiliaria;
GO

-- Tabela Pessoa
CREATE TABLE Pessoa (
    ID_Pessoa INT PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL,
    RG NVARCHAR(20) NOT NULL
);
GO

-- Tabela Imovel
CREATE TABLE Imovel (
    Identificacao_Fiscal INT PRIMARY KEY,
    Endereco NVARCHAR(200) NOT NULL,
    ID_Pessoa INT,  -- chave estrangeira
    FOREIGN KEY (ID_Pessoa) REFERENCES Pessoa(ID_Pessoa)
);
GO



-- 2) Editora

CREATE DATABASE EditoraDB;
GO

USE EditoraDB;
GO

-- Tabela Editora
CREATE TABLE Editora (
    Codigo INT PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL
);
GO

-- Tabela Livro
CREATE TABLE Livro (
    Codigo INT PRIMARY KEY,
    Titulo NVARCHAR(200) NOT NULL
);
GO

-- Tabela Publica (Relacionamento com atributos)
CREATE TABLE Publica (
    Codigo_Editora INT,
    Codigo_Livro INT,
    Preco DECIMAL(10,2) NOT NULL,
    Dt_Lancamento DATE NOT NULL,
    PRIMARY KEY (Codigo_Editora, Codigo_Livro),
    FOREIGN KEY (Codigo_Editora) REFERENCES Editora(Codigo),
    FOREIGN KEY (Codigo_Livro) REFERENCES Livro(Codigo)
);
GO



-- 3) Queries para Biblioteca

CREATE DATABASE Biblioteca;
GO

USE Biblioteca;
GO

CREATE TABLE tb_caixa (
    id_caixa INT PRIMARY KEY,
    nome_caixa NVARCHAR(100)
);

CREATE TABLE tb_genero (
    id_genero INT PRIMARY KEY,
    nome_genero NVARCHAR(100)
);

CREATE TABLE tb_editora (
    id_editora INT PRIMARY KEY,
    nome_editora NVARCHAR(100)
);

CREATE TABLE tb_autor (
    id_autor INT PRIMARY KEY,
    nome_autor NVARCHAR(100)
);

CREATE TABLE tb_turma (
    id_turma INT PRIMARY KEY,
    nome_turma NVARCHAR(100)
);

CREATE TABLE tb_aluno (
    id_aluno INT PRIMARY KEY,
    nome_aluno NVARCHAR(100),
    telefone_aluno NVARCHAR(20),
    bairro NVARCHAR(100),
    id_turma INT FOREIGN KEY REFERENCES tb_turma(id_turma)
);

CREATE TABLE tb_livro (
    id_livro INT PRIMARY KEY,
    nome_livro NVARCHAR(150),
    ano_publicacao INT,
    id_aluno_doador_livro INT FOREIGN KEY REFERENCES tb_aluno(id_aluno),
    id_genero INT FOREIGN KEY REFERENCES tb_genero(id_genero),
    id_editora INT FOREIGN KEY REFERENCES tb_editora(id_editora),
    id_autor INT FOREIGN KEY REFERENCES tb_autor(id_autor),
    id_caixa INT FOREIGN KEY REFERENCES tb_caixa(id_caixa)
);

CREATE TABLE tb_emprestimo (
    id_aluno INT FOREIGN KEY REFERENCES tb_aluno(id_aluno),
    id_livro INT FOREIGN KEY REFERENCES tb_livro(id_livro),
    data_emprestimo DATE,
    data_prev_devolucao DATE,
    data_devolucao DATE,
    PRIMARY KEY (id_aluno, id_livro, data_emprestimo)
);
GO

-- 3.1) Lista de empréstimos de alunos (nome do aluno, turma, data, nome do livro, nome do autor, nome da editora)
SELECT 
    a.nome_aluno,
    t.nome_turma,
    e.data_emprestimo,
    l.nome_livro,
    au.nome_autor,
    ed.nome_editora
FROM tb_emprestimo e
JOIN tb_aluno a ON a.id_aluno = e.id_aluno
JOIN tb_turma t ON t.id_turma = a.id_turma
JOIN tb_livro l ON l.id_livro = e.id_livro
JOIN tb_autor au ON au.id_autor = l.id_autor
JOIN tb_editora ed ON ed.id_editora = l.id_editora;

-- 3.2) Quantidade de doações por turma
SELECT 
    t.nome_turma,
    COUNT(*) AS qtd_doacoes
FROM tb_livro l
JOIN tb_aluno a ON a.id_aluno = l.id_aluno_doador_livro
JOIN tb_turma t ON t.id_turma = a.id_turma
GROUP BY t.nome_turma;

-- 3.3) Alunos que pegaram livros do ano mais recente
DECLARE @ano_recente INT = (
    SELECT MAX(ano_publicacao)
    FROM tb_livro
);

SELECT DISTINCT 
    a.nome_aluno,
    l.nome_livro,
    l.ano_publicacao
FROM tb_emprestimo e
JOIN tb_aluno a ON a.id_aluno = e.id_aluno
JOIN tb_livro l ON l.id_livro = e.id_livro
WHERE l.ano_publicacao = @ano_recente;

-- 3.4) Lista de livros e quantidade de vezes emprestados (mesmo livro ou mesmo nome)
SELECT 
    l.nome_livro,
    COUNT(*) AS qtd_emprestimos
FROM tb_emprestimo e
JOIN tb_livro l ON l.id_livro = e.id_livro
GROUP BY l.nome_livro;

-- 3.5) Nome dos livros e editora com maior número de livros cadastrados
WITH EditoraMaisLivros AS (
    SELECT TOP 1
        id_editora,
        COUNT(*) AS qtd_livros
    FROM tb_livro
    GROUP BY id_editora
    ORDER BY qtd_livros DESC
)
SELECT 
    l.nome_livro,
    ed.nome_editora
FROM tb_livro l
JOIN EditoraMaisLivros eml ON eml.id_editora = l.id_editora
JOIN tb_editora ed ON ed.id_editora = l.id_editora;