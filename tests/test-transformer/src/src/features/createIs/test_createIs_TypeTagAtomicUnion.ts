import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createIs_TypeTagAtomicUnion = (): void => _test_is(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.createIs<TypeTagAtomicUnion>());
