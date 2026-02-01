import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_equals_TypeTagAtomicUnion = (): void => _test_equals(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.equals<TypeTagAtomicUnion>(input));
