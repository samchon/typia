import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ConstantAtomicUnion = _test_stringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.stringify(input),
);