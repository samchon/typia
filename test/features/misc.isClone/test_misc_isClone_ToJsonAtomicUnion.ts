import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_misc_isClone_ToJsonAtomicUnion = _test_misc_isClone(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    typia.misc.isClone<ToJsonAtomicUnion>(input),
);
