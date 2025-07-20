import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createAssertParseCustom_ArrayRecursive = (): void =>
  _test_json_assertParse(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    typia.json.createAssertParse<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
