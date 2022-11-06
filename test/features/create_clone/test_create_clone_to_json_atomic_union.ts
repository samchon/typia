import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_to_json_atomic_union = _test_clone(
    "toJSON() method returning atomic union type",
    ToJsonAtomicUnion.generate,
    TSON.createClone<ToJsonAtomicUnion>(),
);
