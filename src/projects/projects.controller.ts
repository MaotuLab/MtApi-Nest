import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { Project } from './projects.entity';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Project> {
    return this.projectsService.findOneById(id);
  }
  @Post()
  async create(@Body() project: Project) {
    project.subTitle = project.subTitle || '';
    project.imageUrl = project.imageUrl || '';
    project.description = project.description || '';
    project.isPublished = project.isPublished || false;

    try {
      let model = await this.projectsService.create(project);
      return {
        result: 'ok',
      };
    } catch {
      return {
        result: 'fail',
        message: 'err',
      };
    }
  }
}
