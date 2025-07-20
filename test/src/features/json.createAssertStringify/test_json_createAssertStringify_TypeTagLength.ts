import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createAssertStringify_TypeTagLength = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.json.createAssertStringify<TypeTagLength>());
