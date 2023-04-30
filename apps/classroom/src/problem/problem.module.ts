import { Module } from "@nestjs/common";
import { ProblemModuleBase } from "./base/problem.module.base";
import { ProblemService } from "./problem.service";
import { ProblemController } from "./problem.controller";
import { ProblemResolver } from "./problem.resolver";

@Module({
  imports: [ProblemModuleBase],
  controllers: [ProblemController],
  providers: [ProblemService, ProblemResolver],
  exports: [ProblemService],
})
export class ProblemModule {}
