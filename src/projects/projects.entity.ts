import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  subTitle: string;

  @Column('text')
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  isPublished: boolean;
}