import { Body, Controller, Get, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { createTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTask: createTaskDto): Task {
    return this.tasksService.createTask(createTask);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

}
