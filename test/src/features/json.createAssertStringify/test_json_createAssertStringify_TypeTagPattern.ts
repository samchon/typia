import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createAssertStringify_TypeTagPattern = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.json.createAssertStringify<TypeTagPattern>());
