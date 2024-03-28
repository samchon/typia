import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createAssertStringify_TypeTagArray =
  _test_json_assertStringify(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.json.createAssertStringify<TypeTagArray>());
