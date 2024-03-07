import typia from "typia";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.application<[ArrayRepeatedUnionWithTuple], "ajv", false>());
