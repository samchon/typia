import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ConstantAtomicSimple = _test_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createIsClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
