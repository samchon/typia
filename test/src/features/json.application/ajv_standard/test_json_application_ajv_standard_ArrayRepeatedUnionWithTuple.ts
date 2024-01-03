import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_ajv_standard_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.application<[ArrayRepeatedUnionWithTuple], "ajv", false>());
