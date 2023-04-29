import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProblemServiceBase } from "./base/problem.service.base";

@Injectable()
export class ProblemService extends ProblemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
