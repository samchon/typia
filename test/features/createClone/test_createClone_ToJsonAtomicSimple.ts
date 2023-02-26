import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createClone_ToJsonAtomicSimple = _test_clone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createClone<ToJsonAtomicSimple>(),
);
