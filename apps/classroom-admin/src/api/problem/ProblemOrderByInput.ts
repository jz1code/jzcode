import { SortOrder } from "../../util/SortOrder";

export type ProblemOrderByInput = {
  ac?: SortOrder;
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  memory?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
