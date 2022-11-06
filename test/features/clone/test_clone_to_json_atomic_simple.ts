import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_atomic_simple = _test_clone(
    "toJSON() returning atomic value",
    ToJsonAtomicSimple.generate,
    (input) => TSON.clone(input),
);
