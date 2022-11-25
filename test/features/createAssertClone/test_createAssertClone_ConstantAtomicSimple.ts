import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ConstantAtomicSimple = _test_assertClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createAssertClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);