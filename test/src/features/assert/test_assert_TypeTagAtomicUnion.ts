import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagAtomicUnion = (): void => _test_assert(TypeGuardError)(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.assert<TypeTagAtomicUnion>(input));
