import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertEquals_TypeTagAtomicUnion = _test_assertEquals(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.assertEquals<TypeTagAtomicUnion>(input));
