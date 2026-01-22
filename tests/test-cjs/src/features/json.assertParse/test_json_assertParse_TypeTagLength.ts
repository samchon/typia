import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_assertParse_TypeTagLength = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) => typia.json.assertParse<TypeTagLength>(input));
