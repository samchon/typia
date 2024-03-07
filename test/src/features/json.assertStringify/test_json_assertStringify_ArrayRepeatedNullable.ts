import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayRepeatedNullable =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
    typia.json.assertStringify<ArrayRepeatedNullable>(input),
  );
