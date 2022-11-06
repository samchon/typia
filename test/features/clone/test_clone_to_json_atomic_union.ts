import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_atomic_union = _test_clone(
    "toJSON() method returning atomic union type",
    ToJsonAtomicUnion.generate,
    (input) => TSON.clone(input),
);
