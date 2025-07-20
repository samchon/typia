import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertStringify_ArrayUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )((input) => typia.json.assertStringify<ArrayUnion>(input));
