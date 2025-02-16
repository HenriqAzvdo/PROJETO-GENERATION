import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cadastro } from "../../cadastro/entities/cadastro.entity";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({name:'tb_usuario'})
export class Usuario{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    nickname: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario,{
        onDelete: "CASCADE"
    })
    postagem: Postagem

    @OneToOne(() => Cadastro, (cadastro) => cadastro.usuario) 
    @JoinColumn()
    cadastro: Cadastro

}