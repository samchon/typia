import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_TypeTagType =
  _test_json_assertStringify(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.json.createAssertStringify<TypeTagType>());
