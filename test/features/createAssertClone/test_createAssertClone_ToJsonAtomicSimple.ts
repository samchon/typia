import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ToJsonAtomicSimple = _test_assertClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    TSON.createAssertClone<ToJsonAtomicSimple>(),
);