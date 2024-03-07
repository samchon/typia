import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArraySimple =
  _test_json_assertStringify(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )((input) =>
    typia.json.assertStringify<ArraySimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
