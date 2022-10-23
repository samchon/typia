import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "./../is/_test_is";

export const test_create_is_constant_atomic = _test_is(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createIs<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
