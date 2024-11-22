import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_application_v3_1_ArrayHierarchical =
  _test_json_application({
    version: "3.1",
    name: "ArrayHierarchical",
  })(typia.json.application<ArrayHierarchicalApplication, "3.1">());

interface ArrayHierarchicalApplication {
  insert(first: ArrayHierarchical): Promise<void>;
  reduce(
    first: ArrayHierarchical,
    second: ArrayHierarchical | null,
  ): Promise<ArrayHierarchical>;
  coalesce(
    first: ArrayHierarchical | null,
    second: ArrayHierarchical | null,
    third?: ArrayHierarchical | null,
  ): Promise<ArrayHierarchical | null>;
}
