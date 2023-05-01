import { ProblemWhereUniqueInput } from "./ProblemWhereUniqueInput";
import { ProblemUpdateInput } from "./ProblemUpdateInput";

export type UpdateProblemArgs = {
  where: ProblemWhereUniqueInput;
  data: ProblemUpdateInput;
};
