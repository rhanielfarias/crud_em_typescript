// Importa o framework Express para criar o servidor
import express from 'express';

// Importa o middleware body-parser para processar requisições JSON
import bodyParser from 'body-parser';

// Importa as rotas definidas para gerenciamento de usuários
import { userRouter } from './routes/userRoutes';

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor irá escutar
const PORT = 3000;

// Configura o middleware para interpretar JSON nas requisições
app.use(bodyParser.json());

// Define a rota base para usuários, usando o roteador importado
app.use('/api/users', userRouter);

// Inicia o servidor e exibe uma mensagem no console indicando a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
