import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArraySimple =
  _test_json_assertStringify(TypeGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.json.createAssertStringify<ArraySimple>());
