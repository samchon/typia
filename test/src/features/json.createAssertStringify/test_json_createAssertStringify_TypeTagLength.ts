import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_TypeTagLength =
  _test_json_assertStringify(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.json.createAssertStringify<TypeTagLength>());
