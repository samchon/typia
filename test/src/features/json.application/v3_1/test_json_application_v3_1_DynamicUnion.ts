import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_v3_1_DynamicUnion = _test_json_application({
  version: "3.1",
  name: "DynamicUnion",
})(typia.json.application<[DynamicUnion], "3.1">());
