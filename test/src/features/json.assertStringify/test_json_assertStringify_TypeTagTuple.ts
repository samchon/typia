import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagTuple =
  _test_json_assertStringify(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) => typia.json.assertStringify<TypeTagTuple>(input));
