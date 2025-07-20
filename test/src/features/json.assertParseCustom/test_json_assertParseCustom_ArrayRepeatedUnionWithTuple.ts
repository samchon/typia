import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_assertParseCustom_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
      typia.json.assertParse<ArrayRepeatedUnionWithTuple>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
