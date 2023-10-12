import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  todo_id!: number;

  @Column()
  todo_msg!: string;

  @Column()
  status!: string;

  @Column()
  description!: string;

  @Column()
  alert_time!: string;

  @Column()
  user_id!: number;

}
