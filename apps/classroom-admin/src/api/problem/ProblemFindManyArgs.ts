import { ProblemWhereInput } from "./ProblemWhereInput";
import { ProblemOrderByInput } from "./ProblemOrderByInput";

export type ProblemFindManyArgs = {
  where?: ProblemWhereInput;
  orderBy?: Array<ProblemOrderByInput>;
  skip?: number;
  take?: number;
};
