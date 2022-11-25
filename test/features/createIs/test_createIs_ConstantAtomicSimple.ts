import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ConstantAtomicSimple = _test_is(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createIs<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
