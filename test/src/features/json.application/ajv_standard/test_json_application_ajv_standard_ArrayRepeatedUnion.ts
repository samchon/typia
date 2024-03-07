import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ArrayRepeatedUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedUnion",
  })(typia.json.application<[ArrayRepeatedUnion], "ajv", false>());
