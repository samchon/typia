import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ClassMethod =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ClassMethod",
  })(typia.json.application<[ClassMethod], "ajv", true>());
