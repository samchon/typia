import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_json_assertParse_TypeTagPattern = _test_json_assertParse(
  TypeGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.json.assertParse<TypeTagPattern>(input),
);
