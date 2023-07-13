import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_misc_clone_ToJsonAtomicUnion = _test_misc_clone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.misc.createClone<ToJsonAtomicUnion>(),
);
