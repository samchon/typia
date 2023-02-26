import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertClone_ConstantAtomicSimple = _test_assertClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assertClone(input),
    ConstantAtomicSimple.SPOILERS,
);
