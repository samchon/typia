import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_assertParseCustom_ArrayRecursive = (): void =>
  _test_json_assertParse(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.json.assertParse<ArrayRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
