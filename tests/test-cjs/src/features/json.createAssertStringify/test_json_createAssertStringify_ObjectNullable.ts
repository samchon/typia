import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createAssertStringify_ObjectNullable = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.json.createAssertStringify<ObjectNullable>());
