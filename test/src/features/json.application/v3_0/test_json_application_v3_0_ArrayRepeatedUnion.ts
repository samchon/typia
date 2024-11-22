import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_json_application_v3_0_ArrayRepeatedUnion =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedUnion",
  })(typia.json.application<ArrayRepeatedUnionApplication, "3.0">());

interface ArrayRepeatedUnionApplication {
  insert(first: ArrayRepeatedUnion): Promise<void>;
  reduce(
    first: ArrayRepeatedUnion,
    second: ArrayRepeatedUnion | null,
  ): Promise<ArrayRepeatedUnion>;
  coalesce(
    first: ArrayRepeatedUnion | null,
    second: ArrayRepeatedUnion | null,
    third?: ArrayRepeatedUnion | null,
  ): Promise<ArrayRepeatedUnion | null>;
}
