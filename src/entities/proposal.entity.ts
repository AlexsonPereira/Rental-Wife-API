import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rating } from "./rating.entity";
import { UserEmployer } from "./userEmployer.entity";
import { UserHired } from "./userHired.entity";

@Entity("employer_proposal_hired")
export class Proposals {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @ManyToOne(() => UserEmployer, (userEmployer) => userEmployer.proposals)
  employer: UserEmployer;

  @ManyToOne(() => UserHired, (userHired) => userHired.proposals)
  hired: UserHired;

  @OneToOne(() => Rating)
  @JoinColumn()
  rating: Rating;
}
