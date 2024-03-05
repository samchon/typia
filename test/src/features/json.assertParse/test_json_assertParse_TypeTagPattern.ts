import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_assertParse_TypeTagPattern = _test_json_assertParse(
  TypeGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.json.assertParse<TypeTagPattern>(input),
);
