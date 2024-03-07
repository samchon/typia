import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagTypeUnion = _test_assert(
  CustomGuardError,
)("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.assert<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)),
);
