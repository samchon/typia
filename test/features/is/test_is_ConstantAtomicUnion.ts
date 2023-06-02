import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_ConstantAtomicUnion = _test_is(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.is(input),
    ConstantAtomicUnion.SPOILERS,
);
