import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createAssertParse_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_json_assertParse(TypeGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
      typia.json.createAssertParse<ArrayRepeatedUnionWithTuple>(),
    );
