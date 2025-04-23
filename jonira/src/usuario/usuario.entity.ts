import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('produto')// nome da tabela no banco de dados
export class Usuario {
@PrimaryGeneratedColumn()
id_prod: number;
@Column()
nm_prod: string;
@Column()
valor_prod: number;
}
