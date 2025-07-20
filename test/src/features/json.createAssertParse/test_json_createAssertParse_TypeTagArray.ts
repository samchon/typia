import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createAssertParse_TypeTagArray = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.json.createAssertParse<TypeTagArray>());
