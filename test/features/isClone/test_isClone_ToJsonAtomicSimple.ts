import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_isClone_ToJsonAtomicSimple = _test_isClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.isClone<ToJsonAtomicSimple>(input),
);
