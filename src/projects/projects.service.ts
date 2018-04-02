import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './projects.entity';

@Component()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find();
  }
  async findOneById(id): Promise<Project> {
    return await this.projectsRepository.findOneById(id);
  }
  async create(project){

    return await this.projectsRepository.insert(project);
  }
}