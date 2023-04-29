import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProblemWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  memory?: StringNullableFilter;
  title?: StringNullableFilter;
};
