import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayMatrix =
  _test_json_assertStringify(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )((input) =>
    typia.json.assertStringify<ArrayMatrix>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
