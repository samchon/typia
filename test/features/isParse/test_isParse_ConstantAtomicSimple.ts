import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_isParse_ConstantAtomicSimple = _test_isParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.isParse<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
