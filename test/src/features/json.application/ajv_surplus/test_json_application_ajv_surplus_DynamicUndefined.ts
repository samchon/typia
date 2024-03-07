import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicUndefined =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicUndefined",
  })(typia.json.application<[DynamicUndefined], "ajv", true>());
