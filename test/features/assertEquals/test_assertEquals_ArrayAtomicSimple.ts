import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArrayAtomicSimple = _test_assertEquals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assertEquals(input),
);
