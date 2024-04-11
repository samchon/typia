import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_application_v3_1_TypeTagCustom = _test_json_application({
  version: "3.1",
  name: "TypeTagCustom",
})(typia.json.application<[TypeTagCustom], "3.1">());
