import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_application_v3_1_TypeTagObjectUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagObjectUnion",
  })(typia.json.application<[TypeTagObjectUnion], "3.1">());
