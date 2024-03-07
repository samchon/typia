import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TypeTagDefault =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagDefault",
  })(typia.json.application<[TypeTagDefault], "ajv", true>());
