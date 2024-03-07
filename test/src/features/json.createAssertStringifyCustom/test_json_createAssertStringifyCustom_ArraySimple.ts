import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArraySimple =
  _test_json_assertStringify(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(
    typia.json.createAssertStringify<ArraySimple>(
      (p) => new CustomGuardError(p),
    ),
  );
