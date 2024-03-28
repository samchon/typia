import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertStringifyCustom_ArraySimple =
  _test_json_assertStringify(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )((input) =>
    typia.json.assertStringify<ArraySimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
