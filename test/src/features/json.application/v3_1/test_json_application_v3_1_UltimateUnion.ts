import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_v3_1_UltimateUnion = _test_json_application({
  version: "3.1",
  name: "UltimateUnion",
})(typia.json.application<[UltimateUnion], "3.1">());
