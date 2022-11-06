import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_atomic_simple = _test_is_clone(
    "toJSON() returning atomic value",
    ToJsonAtomicSimple.generate,
    (input) => TSON.isClone(input),
);
