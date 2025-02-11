import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagAtomicUnion = _test_assertGuardEquals(TypeGuardError)(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.createAssertGuardEquals<TypeTagAtomicUnion>());
