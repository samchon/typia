import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_ConstantAtomicSimple = _test_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.isClone(input),
    ConstantAtomicSimple.SPOILERS,
);
