import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createAssertStringify_TypeTagType = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.json.createAssertStringify<TypeTagType>());
