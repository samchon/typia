import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TypeTagRange = _test_json_assertParse(
  TypeGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
  typia.json.createAssertParse<TypeTagRange>(),
);
