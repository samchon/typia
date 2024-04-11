import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_v3_1_ArrayRepeatedRequired =
  _test_json_application({
    version: "3.1",
    name: "ArrayRepeatedRequired",
  })(typia.json.application<[ArrayRepeatedRequired], "3.1">());
