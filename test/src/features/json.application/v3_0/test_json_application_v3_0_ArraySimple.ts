import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_v3_0_ArraySimple = _test_json_application({
  version: "3.0",
  name: "ArraySimple",
})(typia.json.application<[ArraySimple], "3.0">());
