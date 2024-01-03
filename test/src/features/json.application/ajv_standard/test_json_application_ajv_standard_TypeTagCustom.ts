import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_application_ajv_standard_TypeTagCustom =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagCustom",
  })(typia.json.application<[TypeTagCustom], "ajv", false>());
