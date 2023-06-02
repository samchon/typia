import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_validateClone_ToJsonAtomicSimple = _test_validateClone(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.validateClone(input),
);
