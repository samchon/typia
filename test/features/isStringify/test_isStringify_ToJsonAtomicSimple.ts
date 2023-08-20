import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_isStringify_ToJsonAtomicSimple = _test_isStringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.isStringify<ToJsonAtomicSimple>(input),
);
