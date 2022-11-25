import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonAtomicUnion = _test_clone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    TSON.createClone<ToJsonAtomicUnion>(),
);
