import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_assertStringifyCustom_ArrayRepeatedNullable =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
    typia.json.assertStringify<ArrayRepeatedNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
