import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_v3_0_ArrayRepeatedRequired =
  _test_json_application({
    version: "3.0",
    name: "ArrayRepeatedRequired",
  })(typia.json.application<[ArrayRepeatedRequired], "3.0">());
