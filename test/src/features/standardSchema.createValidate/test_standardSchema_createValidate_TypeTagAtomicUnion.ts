import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_standardSchema_createValidate_TypeTagAtomicUnion = (): void => _test_standardSchema_validate(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.createValidate<TypeTagAtomicUnion>());
