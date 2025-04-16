import { Column, Entity, PrimaryGenerateColumn } from 'typeorm';
import { TaskStatus } from "./task.model"

@Entity()
export class Task {
  @PrimaryGenerateColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: TaskStatus
}