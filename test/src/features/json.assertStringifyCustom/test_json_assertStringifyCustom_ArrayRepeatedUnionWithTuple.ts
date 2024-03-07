import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayRepeatedUnionWithTuple =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.json.assertStringify<ArrayRepeatedUnionWithTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
