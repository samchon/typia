import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertCustom_TypeTagAtomicUnion = _test_assert(
  CustomGuardError,
)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
  typia.assert<TypeTagAtomicUnion>(input, (p) => new CustomGuardError(p)),
);
