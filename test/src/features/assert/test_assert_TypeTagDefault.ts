import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagDefault = _test_assert(TypeGuardError)(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.assert<TypeTagDefault>(input),
);
