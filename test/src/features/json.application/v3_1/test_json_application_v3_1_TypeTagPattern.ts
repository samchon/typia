import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_v3_1_TypeTagPattern = _test_json_application(
  {
    version: "3.1",
    name: "TypeTagPattern",
  },
)(typia.json.application<[TypeTagPattern], "3.1">());
