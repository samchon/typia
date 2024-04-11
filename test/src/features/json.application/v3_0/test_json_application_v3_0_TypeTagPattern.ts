import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_v3_0_TypeTagPattern = _test_json_application(
  {
    version: "3.0",
    name: "TypeTagPattern",
  },
)(typia.json.application<[TypeTagPattern], "3.0">());
