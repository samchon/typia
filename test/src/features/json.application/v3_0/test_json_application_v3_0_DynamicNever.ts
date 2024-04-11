import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_application_v3_0_DynamicNever = _test_json_application({
  version: "3.0",
  name: "DynamicNever",
})(typia.json.application<[DynamicNever], "3.0">());
