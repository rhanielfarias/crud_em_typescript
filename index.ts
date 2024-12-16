// Importa o framework Express para criar o servidor
import express from 'express';

// Importa o middleware body-parser para processar requisi��es JSON
import bodyParser from 'body-parser';

// Importa as rotas definidas para gerenciamento de usu�rios
import { userRouter } from './routes/userRoutes';

// Cria uma inst�ncia do aplicativo Express
const app = express();

// Define a porta em que o servidor ir� escutar
const PORT = 3000;

// Configura o middleware para interpretar JSON nas requisi��es
app.use(bodyParser.json());

// Define a rota base para usu�rios, usando o roteador importado
app.use('/api/users', userRouter);

// Inicia o servidor e exibe uma mensagem no console indicando a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
