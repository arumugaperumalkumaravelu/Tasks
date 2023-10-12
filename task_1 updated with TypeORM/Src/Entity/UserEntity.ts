import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TodoEntity } from './TodoEntity';

@Entity('userlist')
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Column()
  username!: string ;

  @Column()
  age!: number ;

  @Column()
  gender!: string;

  @Column()
  place!: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user_id)
  todos!: TodoEntity[];
}