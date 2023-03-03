import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()

export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")

    id: number;

    @Column({ type: "varchar", length: 50})

    username: string;

    @Column()

    email: string;

    @Column()

    password: string;

    @Column()

    fullname: number;

    @CreateDateColumn()

    createdAt: Date;

}