import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_to_json_atomic_simple = _test_is_clone(
    "toJSON() returning atomic value",
    ToJsonAtomicSimple.generate,
    TSON.createIsClone<ToJsonAtomicSimple>(),
);
