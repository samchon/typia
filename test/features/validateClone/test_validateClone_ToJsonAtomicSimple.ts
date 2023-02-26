import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ToJsonAtomicSimple = _test_validateClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.validateClone(input),
);
