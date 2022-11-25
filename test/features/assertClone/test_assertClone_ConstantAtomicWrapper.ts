import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ConstantAtomicWrapper = _test_assertClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.assertClone(input),
    ConstantAtomicWrapper.SPOILERS,
);