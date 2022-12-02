import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ToJsonAtomicSimple = _test_clone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => TSON.clone(input),
);
