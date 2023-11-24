import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assert_TypeTagType = _test_assert("TypeTagType")<TypeTagType>(
  TypeTagType,
)((input) => typia.assert<TypeTagType>(input));
