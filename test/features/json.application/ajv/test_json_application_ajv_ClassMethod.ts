import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_ajv_ClassMethod = _test_json_application(
  "ajv",
)("ClassMethod")(typia.json.application<[ClassMethod], "ajv">());
