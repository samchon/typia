import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_application_v3_0_ArrayUnion = _test_json_application({
  version: "3.0",
  name: "ArrayUnion",
})(typia.json.application<[ArrayUnion], "3.0">());
