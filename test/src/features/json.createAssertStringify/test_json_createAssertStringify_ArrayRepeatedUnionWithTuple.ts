import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createAssertStringify_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
      typia.json.createAssertStringify<ArrayRepeatedUnionWithTuple>(),
    );
