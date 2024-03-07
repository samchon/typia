import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagRange =
  _test_json_assertStringify(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) => typia.json.assertStringify<TypeTagRange>(input));
