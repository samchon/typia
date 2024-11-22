import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_llm_application_3_0_TupleHierarchical = _test_llm_application(
  {
    model: "3.0",
    name: "TupleHierarchical",
  },
)(typia.llm.application<TupleHierarchicalApplication, "3.0">());

interface TupleHierarchicalApplication {
  insert(first: TupleHierarchical): Promise<void>;
  reduce(
    first: TupleHierarchical,
    second: TupleHierarchical | null,
  ): Promise<TupleHierarchical>;
  coalesce(
    first: TupleHierarchical | null,
    second: TupleHierarchical | null,
    third?: TupleHierarchical | null,
  ): Promise<TupleHierarchical | null>;
}
