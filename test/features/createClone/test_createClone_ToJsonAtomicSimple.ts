import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonAtomicSimple = _test_clone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createClone<ToJsonAtomicSimple>(),
);