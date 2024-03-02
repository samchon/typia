import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assert_TypeTagObjectUnion = _test_assert(TypeGuardError)(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.assert<TypeTagObjectUnion>(input),
);
