import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProblemService } from "./problem.service";
import { ProblemControllerBase } from "./base/problem.controller.base";

@swagger.ApiTags("problems")
@common.Controller("problems")
export class ProblemController extends ProblemControllerBase {
  constructor(
    protected readonly service: ProblemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
