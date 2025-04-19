import { Column, Entity, PrimaryGenerateColumn } from 'typeorm';
import { TaskStatus } from "./task-status.enum"

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