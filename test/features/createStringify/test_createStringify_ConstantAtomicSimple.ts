import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ConstantAtomicSimple = _test_stringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createStringify<ConstantAtomicSimple>(),
);