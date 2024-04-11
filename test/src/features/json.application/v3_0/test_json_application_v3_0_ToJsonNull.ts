import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_application_v3_0_ToJsonNull = _test_json_application({
  version: "3.0",
  name: "ToJsonNull",
})(typia.json.application<[ToJsonNull], "3.0">());
