import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_validate_TypeTagAtomicUnion = (): void => _test_validate(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.validate<TypeTagAtomicUnion>(input));
