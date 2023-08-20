import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_clone_ArrayAtomicSimple = _test_clone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.clone<ArrayAtomicSimple>(input),
);
