import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ConstantAtomicSimple = _test_stringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.stringify(input),
);