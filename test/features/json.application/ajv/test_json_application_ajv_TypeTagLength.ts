import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_ajv_TypeTagLength = _test_json_application(
  "ajv",
)("TypeTagLength")(typia.json.application<[TypeTagLength], "ajv">());
