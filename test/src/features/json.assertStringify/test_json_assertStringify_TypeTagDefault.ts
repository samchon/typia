import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_assertStringify_TypeTagDefault = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) => typia.json.assertStringify<TypeTagDefault>(input));
