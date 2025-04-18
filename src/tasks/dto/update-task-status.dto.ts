import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class updateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus 
}