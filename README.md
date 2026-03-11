# 💡 Soluções OBI IFPAR

Projeto desenvolvido pelo **Clube de Programação do IFPAR** (Instituto Federal do Rio Grande do Norte — Campus Parnamirim).

O objetivo do projeto é criar uma plataforma web onde estudantes possam **resolver e testar automaticamente questões da Olimpíada Brasileira de Informática (OBI)**.

A ideia surgiu a partir da necessidade de uma ferramenta que permita aos alunos praticar problemas da OBI e verificar rapidamente se suas soluções estão corretas.

## 📍 Objetivo

Criar uma plataforma que permita aos estudantes:

- acessar problemas da OBI
- enviar códigos como solução
- testar automaticamente as respostas
- receber feedback sobre a execução
- utilizar a plataforma como ferramenta de estudo para olimpíadas de programação

Além disso, o projeto também funciona como **um ambiente de aprendizado colaborativo**, permitindo que estudantes participem do desenvolvimento de uma aplicação real.

## 📖 Sobre o Clube de Programação IFPAR

O Clube de Programação é uma iniciativa estudantil criada no campus com o objetivo de:

- incentivar a participação em olimpíadas de programação
- apoiar estudantes no aprendizado de algoritmos e programação
- desenvolver projetos colaborativos
- criar uma comunidade ativa de programadores no campus

Este é o **primeiro projeto oficial do clube**.

## 💡 Sobre a OBI

A [**Olimpíada Brasileira de Informática (OBI)**](https://olimpiada.ic.unicamp.br/) é uma competição nacional que busca estimular o estudo de algoritmos, lógica e programação entre estudantes brasileiros.

As provas são compostas por desafios que exigem a implementação de **algoritmos eficientes para resolver problemas computacionais**.

Este projeto busca facilitar o treinamento para a OBI reunindo diversos problemas em uma única plataforma.

## 📚 Tecnologias utilizadas

O projeto utiliza tecnologias modernas de desenvolvimento web.

### Frontend

- React
- HTML
- CSS
- Tailwind

### Backend

- Python
- Flask

### Database

- SQLite

### Ferramentas

- Git
- Git Flow
- GitHub

## 🔧 Como rodar o projeto

Siga os passos abaixo para executar o projeto localmente.

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/g-aleixo/solucoes-obi-ifpar.git
cd solucoes-obi-ifpar
```

### 2️⃣ Rodar o backend

Acesse a pasta do backend:
```bash
cd src
```

Instale as dependências do Python:
```bash
pip install -r requirements.txt
```

Atualize os dados das questões:
```bash
python scripts/get_urls.py
```

Baixe os gabaritos de todas as questões:
```bash
python scripts/download_answers.py
```
Ou baixe e extraia cada gabarito manualmente para a pasta ```public/answers/<nome_do_zip>```.


Inicie o servidor Flask:
```bash
flask --app app.py run
```

O backend estará disponível em:
```
http://127.0.0.1:5000
```

### 3️⃣ Rodar o frontend

Em outro terminal, volte para a raiz do projeto e acesse a pasta do frontend:
```bash
cd site
```

Instale as dependências do projeto:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação web estará disponível em:
```
http://localhost:5173/solucoes-obi-ifpar/
```

## 👥 Contribuição

Este é um projeto **aberto aos estudantes do Clube de Programação do IFPAR**.

Os participantes podem contribuir de diversas formas:

- desenvolvimento frontend
- desenvolvimento backend
- design de interface
- testes
- revisão de código
- organização do projeto

Mesmo quem ainda está aprendendo pode participar acompanhando o desenvolvimento e contribuindo gradualmente.

### 👨‍💻 Participantes

- [Brasilicio Henrique](https://github.com/brasilicioh) — Coordenador e Dev Fullstack
- [Bruno Gustavo](https://github.com/brunoficial) — Dev Backend
- [Cauã de Lima](https://github.com/CauaLima18) — Dev Backend
- [Guilherme Aleixo](https://github.com/G-aleixo) — Dev Backend
- [Gustavo Andrey](https://github.com/GustavoAndreyIF) — Dev Frontend
- [Júlio César](https://github.com/JCOAlves) — Dev Fullstack
- [Kaio Henrique](https://github.com/pc123456789n) — Dev Frontend
- [Leonardo Kauffman](https://github.com/Leonardo1234321) — Dev Backend
- [Rita de Cássia](https://github.com/Ritinha-tari) — Estudante Aprendiz
- [Thiago Freitas](https://github.com/thifre09) — Dev Frontend

## ⚙️ Status do projeto

Projeto em desenvolvimento.

Este repositório contém o código da aplicação que está sendo construída colaborativamente pelos membros do clube.
