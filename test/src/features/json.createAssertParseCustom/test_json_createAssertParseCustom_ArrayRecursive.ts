import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArrayRecursive =
  _test_json_assertParse(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    typia.json.createAssertParse<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
