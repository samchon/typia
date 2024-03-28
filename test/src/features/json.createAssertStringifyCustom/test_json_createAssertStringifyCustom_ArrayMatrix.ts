import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createAssertStringifyCustom_ArrayMatrix =
  _test_json_assertStringify(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(
    typia.json.createAssertStringify<ArrayMatrix>(
      (p) => new CustomGuardError(p),
    ),
  );
