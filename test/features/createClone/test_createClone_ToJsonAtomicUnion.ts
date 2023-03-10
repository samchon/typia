import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createClone_ToJsonAtomicUnion = _test_clone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createClone<ToJsonAtomicUnion>(),
);
