import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_application_ajv_DynamicNever = _test_json_application(
  "ajv",
)("DynamicNever")(typia.json.application<[DynamicNever], "ajv">());
