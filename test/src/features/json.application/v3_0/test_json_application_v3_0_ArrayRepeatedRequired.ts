import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_v3_0_ArrayRepeatedRequired =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedRequired",
  })(typia.json.application<ArrayRepeatedRequiredApplication, "3.0">());

interface ArrayRepeatedRequiredApplication {
  insert(first: ArrayRepeatedRequired): Promise<void>;
  reduce(
    first: ArrayRepeatedRequired,
    second: ArrayRepeatedRequired | null,
  ): Promise<ArrayRepeatedRequired>;
  coalesce(
    first: ArrayRepeatedRequired | null,
    second: ArrayRepeatedRequired | null,
    third?: ArrayRepeatedRequired | null,
  ): Promise<ArrayRepeatedRequired | null>;
}
