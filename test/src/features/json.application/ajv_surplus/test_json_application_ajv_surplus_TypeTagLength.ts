import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_ajv_surplus_TypeTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagLength",
  })(typia.json.application<[TypeTagLength], "ajv", true>());
