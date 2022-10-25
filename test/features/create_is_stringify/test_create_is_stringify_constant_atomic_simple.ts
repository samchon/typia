import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_constant_atomic = _test_is_stringify(
    "constant atomic",
    ConstantAtomicSimple.generate,
    TSON.createIsStringify<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
