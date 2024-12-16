import { Router } from 'express'; // Importa o roteador do Express.
import { UserRepository } from '../repositories/UserRepository'; // Importa o repositório de usuários.
 
const userRouter = Router(); // Cria uma instância do roteador.
const repository = new UserRepository(); // Cria uma instância do repositório de usuários.
 
userRouter.get('/', (req, res) => { // Define a rota para obter todos os usuários.
    res.json(repository.getAll()); 
}); 
 
userRouter.get('/:cliente_id', (req, res) => { // Define a rota para obter um usuário pelo cliente_id.
    const user = repository.getById(parseInt(req.params.cliente_id)); 
    user ? res.json(user) : res.status(404).send('Usuário não encontrado'); 
}); 
 // Define a rota para criar um novo usuário.
userRouter.post('/', (req, res) => { 
    const newUser = repository.create(req.body); 
    res.status(201).json(newUser); 
}); 
 
userRouter.put('/:cliente_id', (req, res) => { 
    const updatedUser = repository.update(parseInt(req.params.cliente_id), req.body); 
    updatedUser ? res.json(updatedUser) : res.status(404).send('Usuário não encontrado'); 
}); 
 
userRouter.delete('/:cliente_id', (req, res) => { 
    const success = repository.delete(parseInt(req.params.cliente_id)); 
    success ? res.status(204).send() : res.status(404).send('Usuário não encontrado'); 
}); 
 
export { userRouter }; 