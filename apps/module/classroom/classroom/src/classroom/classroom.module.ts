import { Module } from "@nestjs/common";
import { ClassroomModuleBase } from "./base/classroom.module.base";
import { ClassroomService } from "./classroom.service";
import { ClassroomController } from "./classroom.controller";
import { ClassroomResolver } from "./classroom.resolver";

@Module({
  imports: [ClassroomModuleBase],
  controllers: [ClassroomController],
  providers: [ClassroomService, ClassroomResolver],
  exports: [ClassroomService],
})
export class ClassroomModule {}
