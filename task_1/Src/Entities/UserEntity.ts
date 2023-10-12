import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './TodoEntity';

@Entity()
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

  @ManyToOne(() => UserEntity, (user) => user.todos)
  @JoinColumn({ name: 'userid' })
  user!: UserEntity;
}