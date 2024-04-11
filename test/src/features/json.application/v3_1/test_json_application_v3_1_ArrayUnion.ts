import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_application_v3_1_ArrayUnion = _test_json_application({
  version: "3.1",
  name: "ArrayUnion",
})(typia.json.application<[ArrayUnion], "3.1">());
