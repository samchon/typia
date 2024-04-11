import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_application_v3_1_ArrayRecursive = _test_json_application(
  {
    version: "3.1",
    name: "ArrayRecursive",
  },
)(typia.json.application<[ArrayRecursive], "3.1">());
