import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TypeTagPattern =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagPattern",
  })(typia.json.application<[TypeTagPattern], "ajv", false>());
