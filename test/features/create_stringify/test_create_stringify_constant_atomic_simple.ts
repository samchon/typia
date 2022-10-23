import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_constant_atomic = _test_stringify(
    "constant atomic",
    ConstantAtomicSimple.generate(),
    TSON.createStringify<ConstantAtomicSimple>(),
);
