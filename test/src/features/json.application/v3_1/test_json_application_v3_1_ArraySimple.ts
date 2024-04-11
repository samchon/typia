import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_v3_1_ArraySimple = _test_json_application({
  version: "3.1",
  name: "ArraySimple",
})(typia.json.application<[ArraySimple], "3.1">());
