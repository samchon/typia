import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssert_TypeTagAtomicUnion = _test_assert(
  TypeGuardError,
)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
  typia.createAssert<TypeTagAtomicUnion>(),
);
