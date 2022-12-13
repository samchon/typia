import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonAtomicSimple = _test_validateEquals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.validateEquals(input),
);