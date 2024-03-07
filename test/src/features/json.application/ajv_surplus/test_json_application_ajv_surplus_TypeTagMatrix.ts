import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TypeTagMatrix =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagMatrix",
  })(typia.json.application<[TypeTagMatrix], "ajv", true>());
