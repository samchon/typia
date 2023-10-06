import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createEquals_TypeTagAtomicUnion = _test_equals(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.createEquals<TypeTagAtomicUnion>());
