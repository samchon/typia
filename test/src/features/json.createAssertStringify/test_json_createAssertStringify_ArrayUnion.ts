import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArrayUnion =
  _test_json_assertStringify(TypeGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )(typia.json.createAssertStringify<ArrayUnion>());
