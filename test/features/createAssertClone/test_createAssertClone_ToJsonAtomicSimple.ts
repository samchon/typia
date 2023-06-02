import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertClone_ToJsonAtomicSimple = _test_assertClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createAssertClone<ToJsonAtomicSimple>(),
);
