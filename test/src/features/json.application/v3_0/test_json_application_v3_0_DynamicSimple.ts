import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_application_v3_0_DynamicSimple = _test_json_application({
  version: "3.0",
  name: "DynamicSimple",
})(typia.json.application<[DynamicSimple], "3.0">());
