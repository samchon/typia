import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_application_ajv_standard_TypeTagObjectUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagObjectUnion",
  })(typia.json.application<[TypeTagObjectUnion], "ajv", false>());
