import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_application_ajv_standard_TypeTagArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagArray",
  })(typia.json.application<[TypeTagArray], "ajv", false>());
