import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_application_v3_1_TupleHierarchical =
  _test_json_application({
    version: "3.1",
    name: "TupleHierarchical",
  })(typia.json.application<TupleHierarchicalApplication, "3.1">());

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
