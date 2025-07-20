import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_assertStringify_TypeTagRange = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) => typia.json.assertStringify<TypeTagRange>(input));
