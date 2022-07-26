import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
 
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name!: string;

  @Column({ type: 'varchar' })
  public address!: string;

  @Column({ type: 'varchar' })
  public nationalCode!: string;

  @Column({ type: 'integer' })
  public age!: number;

 

}
