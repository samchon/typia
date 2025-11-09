import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_isPrune_TypeTagAtomicUnion = (): void => _test_misc_isPrune(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.misc.isPrune<TypeTagAtomicUnion>(input));
