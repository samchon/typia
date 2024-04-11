import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_v3_0_UltimateUnion = _test_json_application({
  version: "3.0",
  name: "UltimateUnion",
})(typia.json.application<[UltimateUnion], "3.0">());
