import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_assertStringifyCustom_ArrayMatrix =
  _test_json_assertStringify(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )((input) =>
    typia.json.assertStringify<ArrayMatrix>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
