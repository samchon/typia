import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_application_v3_0_TypeTagRange = _test_json_application({
  version: "3.0",
  name: "TypeTagRange",
})(typia.json.application<[TypeTagRange], "3.0">());
