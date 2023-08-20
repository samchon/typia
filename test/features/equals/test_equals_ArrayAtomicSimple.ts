import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_equals_ArrayAtomicSimple = _test_equals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.equals<ArrayAtomicSimple>(input),
);
