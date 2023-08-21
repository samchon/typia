import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_misc_assertClone_ToJsonAtomicSimple = _test_misc_assertClone(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.misc.createAssertClone<ToJsonAtomicSimple>(),
);
