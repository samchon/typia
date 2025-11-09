import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_assertParse_TypeTagTuple = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) => typia.json.assertParse<TypeTagTuple>(input));
