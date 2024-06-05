# Findbook (back-end)

Back-end do projeto [Findbook](https://github.com/AleferReinert/findbook) desenvolvido durante a 4ª Semana do Herói, da Alexia Kattah.

## Como rodar

### 1. Configure a variável de ambiente para conexão do banco de dados

- Crie o arquivo _.env_
- Acesse [Mongo Atlas](https://cloud.mongodb.com])
- Navegue até Overview > Clusters > Cluster0
- Clique em _Connect_, depois em _Compass_
- Copie a string da conexão
- Em _.env_, crie DATABASE_URL com o valor copiado
- Altere \<password> para o password do usuário

### 2. Inicie o ambiente de desenvolvimento

```
npm run dev
```

Se tudo ocorrer bem, haverá a seguinte mensagem no terminal:

```
Server running on port 3333
Connected database!
```

## Tecnologias Utilizadas

- **express**: Framework para criar aplicações web.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **mongoose**: Biblioteca para modelagem de dados MongoDB.
- **zod**: Biblioteca para validação e parsing de esquemas.
