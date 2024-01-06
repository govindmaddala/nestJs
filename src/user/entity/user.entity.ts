/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {

    @Column()
    @PrimaryColumn()
    email: string;

    @Column()
    password: string;

}