import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagTuple = _test_assert(TypeGuardError)(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) => typia.assert<TypeTagTuple>(input));
