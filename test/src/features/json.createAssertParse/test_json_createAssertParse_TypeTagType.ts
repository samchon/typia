import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagType = _test_json_assertParse(
  TypeGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)(
  typia.json.createAssertParse<TypeTagType>(),
);
