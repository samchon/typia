import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TypeTagAtomicUnion = (): void => _test_misc_assertClone(CustomGuardError)(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.misc.assertClone<TypeTagAtomicUnion>(input, (p) => new CustomGuardError(p)));
