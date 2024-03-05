import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assert_TypeTagTypeUnion = _test_assert(TypeGuardError)(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.assert<TypeTagTypeUnion>(input),
);
