import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_createAssertStringifyCustom_ArrayRepeatedNullable =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
    typia.json.createAssertStringify<ArrayRepeatedNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
