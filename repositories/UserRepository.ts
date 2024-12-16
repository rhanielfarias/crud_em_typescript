import { User } from '../models/User'; // Importa a interface User para tipagem estática.
import fs from 'fs'; // Importa o módulo fs para manipulação de arquivos.
import path from 'path'; // Importa o módulo path para resolver caminhos de arquivos.
 
const DATA_FILE = path.resolve(__dirname, '../../data/users.json'); // Define o caminho para o arquivo de dados JSON.
 
export class UserRepository { // Declara a classe UserRepository responsável pelo gerenciamento de usuários.
    private users: User[] = []; // Declara uma lista de usuários como armazenamento temporário.
 
    constructor() { // Construtor que carrega os dados ao inicializar a classe.
        this.loadData(); 
    } 
 // Verifica se o arquivo de dados existe e o carrega na lista de usuários.
    private loadData() { 
        if (fs.existsSync(DATA_FILE)) { 
            const data = fs.readFileSync(DATA_FILE, 'utf-8'); 
            this.users = JSON.parse(data); 
        } 
    } // Salva a lista de usuários no arquivo JSON.
 
    private saveData() { 
        fs.writeFileSync(DATA_FILE, JSON.stringify(this.users, null, 2)); 
    } 
 // Retorna todos os usuários armazenados.
    getAll(): User[] { 
        return this.users; 
    } // Busca um usuário pelo cliente_id fornecido.
 
    getById(cliente_id: number): User | undefined { 
        return this.users.find(user => user.cliente_id === cliente_id); 
    } 
 
    create(user: User): User { 
        this.users.push(user); 
        this.saveData(); 
        return user; 
    } 
 
    update(cliente_id: number, userData: Partial<User>): User | undefined { 
        const user = this.getById(cliente_id); 
        if (user) { 
            Object.assign(user, userData); 
            this.saveData(); 
        } 
        return user; 
    } 
 
    delete(cliente_id: number): boolean { 
        const index = this.users.findIndex(user => user.cliente_id === cliente_id); 
        if (index !== -1) { 
            this.users.splice(index, 1); 
            this.saveData(); 
            return true; 
        } 
        return false; 
    } 
} 