import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TypeTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagLength",
  })(typia.json.application<[TypeTagLength], "ajv", true>());
