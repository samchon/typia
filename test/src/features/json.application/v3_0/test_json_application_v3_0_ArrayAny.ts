import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_application_v3_0_ArrayAny = _test_json_application({
  version: "3.0",
  name: "ArrayAny",
})(typia.json.application<[ArrayAny], "3.0">());
