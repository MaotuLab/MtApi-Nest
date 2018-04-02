import { Module } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  components: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectsModule {}