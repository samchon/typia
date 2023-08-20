import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_equals_ToJsonAtomicSimple = _test_equals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.equals<ToJsonAtomicSimple>(input),
);
