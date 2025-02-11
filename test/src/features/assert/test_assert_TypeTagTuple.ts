import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assert_TypeTagTuple = _test_assert(TypeGuardError)(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) => typia.assert<TypeTagTuple>(input));
