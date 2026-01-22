import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createAssertParse_TypeTagPattern = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.json.createAssertParse<TypeTagPattern>());
