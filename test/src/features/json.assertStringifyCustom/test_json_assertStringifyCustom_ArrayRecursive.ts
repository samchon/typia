import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayRecursive =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRecursive",
  )<ArrayRecursive>(ArrayRecursive)((input) =>
    typia.json.assertStringify<ArrayRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
