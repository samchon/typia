import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicNever =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicNever",
  })(typia.json.application<[DynamicNever], "ajv", true>());
