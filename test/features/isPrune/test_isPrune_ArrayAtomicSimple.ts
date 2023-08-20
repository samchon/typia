import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_isPrune_ArrayAtomicSimple = _test_isPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.isPrune<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);
