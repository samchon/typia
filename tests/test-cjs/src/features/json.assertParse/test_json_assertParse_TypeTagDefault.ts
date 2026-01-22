import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_assertParse_TypeTagDefault = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) => typia.json.assertParse<TypeTagDefault>(input));
