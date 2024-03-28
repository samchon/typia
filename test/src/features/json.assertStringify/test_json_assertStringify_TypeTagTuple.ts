import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_assertStringify_TypeTagTuple =
  _test_json_assertStringify(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) => typia.json.assertStringify<TypeTagTuple>(input));
