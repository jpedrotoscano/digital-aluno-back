-- CreateTable
CREATE TABLE "cursos" (
    "curso_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "curso_nome" TEXT NOT NULL,
    "curso_descricao" TEXT NOT NULL,
    "criado_em" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curso_duracao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "materiais" (
    "material_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "material_nome" TEXT NOT NULL,
    "material_link" TEXT NOT NULL,
    "curso_id" INTEGER NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "tarefas" (
    "tarefa_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tarefa_titulo" TEXT NOT NULL,
    "tarefa_descricao" TEXT,
    "tarefa_status" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_email" TEXT NOT NULL,
    "usuario_senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vagas" (
    "vaga_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vaga_titulo" TEXT NOT NULL,
    "vaga_imagem" TEXT NOT NULL,
    "vaga_link" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "desafios" (
    "desafio_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desafio_titulo" TEXT NOT NULL,
    "desafio_stack" TEXT NOT NULL,
    "desafio_nivel" TEXT NOT NULL,
    "desafio_descricao" TEXT NOT NULL,
    "desafio_link" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "reposicao" (
    "reposicao_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reposicao_curso" TEXT NOT NULL,
    "reposicao_data" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
