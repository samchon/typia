import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_application_v3_0_TypeTagArray = _test_json_application({
  version: "3.0",
  name: "TypeTagArray",
})(typia.json.application<[TypeTagArray], "3.0">());
