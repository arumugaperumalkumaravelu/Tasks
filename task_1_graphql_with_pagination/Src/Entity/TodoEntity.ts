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

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({ name: "user_id" })
  user_id!: UserEntity;

}
