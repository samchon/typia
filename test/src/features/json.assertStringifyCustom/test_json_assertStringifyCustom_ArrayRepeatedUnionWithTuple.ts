import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_assertStringifyCustom_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
      typia.json.assertStringify<ArrayRepeatedUnionWithTuple>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
