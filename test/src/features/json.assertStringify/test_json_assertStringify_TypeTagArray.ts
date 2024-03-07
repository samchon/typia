import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagArray =
  _test_json_assertStringify(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) => typia.json.assertStringify<TypeTagArray>(input));
