import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagObjectUnion = _test_assert(
  CustomGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.assert<TypeTagObjectUnion>(input, (p) => new CustomGuardError(p)),
);
