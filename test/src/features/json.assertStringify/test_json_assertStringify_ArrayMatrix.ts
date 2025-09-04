import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_assertStringify_ArrayMatrix = (): void =>
  _test_json_assertStringify(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )((input) => typia.json.assertStringify<ArrayMatrix>(input));
