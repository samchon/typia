import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createAssertStringify_TypeTagFormat =
  _test_json_assertStringify(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.json.createAssertStringify<TypeTagFormat>());
