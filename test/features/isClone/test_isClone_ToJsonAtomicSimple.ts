import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ToJsonAtomicSimple = _test_isClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => TSON.isClone(input),
);