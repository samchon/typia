import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assert_TypeTagRange = _test_assert(TypeGuardError)(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) => typia.assert<TypeTagRange>(input));
