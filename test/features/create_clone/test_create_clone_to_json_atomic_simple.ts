import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_to_json_atomic_simple = _test_clone(
    "toJSON() returning atomic value",
    ToJsonAtomicSimple.generate,
    TSON.createClone<ToJsonAtomicSimple>(),
);
