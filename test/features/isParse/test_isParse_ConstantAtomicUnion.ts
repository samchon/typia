import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_ConstantAtomicUnion = _test_isParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isParse<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
