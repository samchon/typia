import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ConstantAtomicSimple = _test_isParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createIsParse<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
