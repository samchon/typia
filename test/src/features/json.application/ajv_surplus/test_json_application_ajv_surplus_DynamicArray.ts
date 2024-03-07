import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicArray",
  })(typia.json.application<[DynamicArray], "ajv", true>());
