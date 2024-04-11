import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_v3_1_TypeTagLength = _test_json_application({
  version: "3.1",
  name: "TypeTagLength",
})(typia.json.application<[TypeTagLength], "3.1">());
