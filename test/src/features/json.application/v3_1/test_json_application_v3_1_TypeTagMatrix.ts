import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_application_v3_1_TypeTagMatrix = _test_json_application({
  version: "3.1",
  name: "TypeTagMatrix",
})(typia.json.application<[TypeTagMatrix], "3.1">());
