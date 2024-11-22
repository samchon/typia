import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_application_v3_0_ArrayRepeatedNullable =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedNullable",
  })(typia.json.application<ArrayRepeatedNullableApplication, "3.0">());

interface ArrayRepeatedNullableApplication {
  insert(first: ArrayRepeatedNullable): Promise<void>;
  reduce(
    first: ArrayRepeatedNullable,
    second: ArrayRepeatedNullable | null,
  ): Promise<ArrayRepeatedNullable>;
  coalesce(
    first: ArrayRepeatedNullable | null,
    second: ArrayRepeatedNullable | null,
    third?: ArrayRepeatedNullable | null,
  ): Promise<ArrayRepeatedNullable | null>;
}
