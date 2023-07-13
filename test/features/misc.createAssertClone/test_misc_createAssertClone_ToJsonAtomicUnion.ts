import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_misc_assertClone_ToJsonAtomicUnion = _test_misc_assertClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.misc.createAssertClone<ToJsonAtomicUnion>(),
);
