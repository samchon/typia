import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_stringify_ToJsonAtomicSimple = _test_stringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.stringify<ToJsonAtomicSimple>(input),
);
