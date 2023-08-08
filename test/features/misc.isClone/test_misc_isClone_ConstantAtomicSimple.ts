import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_isClone_ConstantAtomicSimple = _test_misc_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.misc.isClone(input),
    ConstantAtomicSimple.SPOILERS,
);
