import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assert_TypeTagNaN = _test_assert("TypeTagNaN")<TypeTagNaN>(
  TypeTagNaN,
)((input) => typia.assert<TypeTagNaN>(input));
