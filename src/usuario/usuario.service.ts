import {Client} from "pg";
import { Usuario } from "./usuario.interface";

export async function create(usuario: Usuario){
    const client = new Client();
    await client.connect();

    const res = await client.query('INSERT INTO usuario (nome, email, password, admin) VALUES ($1, $2, $3, $4) RETURNING *',
    [usuario.nome, usuario.email, usuario.password, usuario.admin]);

    const create = res.rows[0];
    
    await client.end();

    return res.rows[0];
}

export async function findAll() {
    const client = new Client();

    await client.connect();
 
    const res = await client.query('SELECT * FROM usuario');
    
    await client.end();

    return res.rows;
}

export async function findByid(id: number){
    const client = new Client();
    await client.connect();

    const res = await client.query('SELECT * FROM usuario WHERE id = $1', [id]);

    client.end

    return res.rows[0];
}