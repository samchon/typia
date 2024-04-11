import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_application_v3_0_ToJsonUnion = _test_json_application({
  version: "3.0",
  name: "ToJsonUnion",
})(typia.json.application<[ToJsonUnion], "3.0">());
