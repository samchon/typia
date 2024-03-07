import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayRepeatedUnionWithTuple =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.json.createAssertStringify<ArrayRepeatedUnionWithTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
