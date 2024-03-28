import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createAssertStringifyCustom_ArrayRecursive =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRecursive",
  )<ArrayRecursive>(ArrayRecursive)(
    typia.json.createAssertStringify<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
