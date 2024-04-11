import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_json_application_v3_1_ArrayRepeatedUnion =
  _test_json_application({
    version: "3.1",
    name: "ArrayRepeatedUnion",
  })(typia.json.application<[ArrayRepeatedUnion], "3.1">());
