import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_v3_0_TypeTagLength = _test_json_application({
  version: "3.0",
  name: "TypeTagLength",
})(typia.json.application<[TypeTagLength], "3.0">());
