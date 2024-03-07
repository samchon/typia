import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ArrayRepeatedNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayRepeatedNullable",
  })(typia.json.application<[ArrayRepeatedNullable], "swagger", false>());
