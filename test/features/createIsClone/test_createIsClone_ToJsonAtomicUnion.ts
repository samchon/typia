import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ToJsonAtomicUnion = _test_isClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    TSON.createIsClone<ToJsonAtomicUnion>(),
);