import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createAssertParseCustom_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
      typia.json.createAssertParse<ArrayRepeatedUnionWithTuple>(
        (p) => new CustomGuardError(p),
      ),
    );
