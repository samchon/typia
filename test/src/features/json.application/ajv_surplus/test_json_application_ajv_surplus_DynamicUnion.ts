import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicUnion",
  })(typia.json.application<[DynamicUnion], "ajv", true>());
