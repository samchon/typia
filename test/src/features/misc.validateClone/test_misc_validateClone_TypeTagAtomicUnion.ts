import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_validateClone_TypeTagAtomicUnion = (): void => _test_misc_validateClone(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.misc.validateClone<TypeTagAtomicUnion>(input));
