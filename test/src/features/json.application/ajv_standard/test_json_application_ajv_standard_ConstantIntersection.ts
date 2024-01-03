import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_application_ajv_standard_ConstantIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantIntersection",
  })(typia.json.application<[ConstantIntersection], "ajv", false>());
