import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagLength = _test_json_assertParse(
  TypeGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
  typia.json.createAssertParse<TypeTagLength>(),
);
