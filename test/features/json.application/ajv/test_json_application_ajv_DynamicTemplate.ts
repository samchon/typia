import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_application_ajv_DynamicTemplate = _test_json_application(
  "ajv",
)("DynamicTemplate")(typia.json.application<[DynamicTemplate], "ajv">());
