import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagAtomicUnion = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.createAssertEquals<TypeTagAtomicUnion>());
