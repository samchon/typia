import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createAssertStringifyCustom_ArraySimple = (): void =>
  _test_json_assertStringify(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(
    typia.json.createAssertStringify<ArraySimple>(
      (p) => new CustomGuardError(p),
    ),
  );
