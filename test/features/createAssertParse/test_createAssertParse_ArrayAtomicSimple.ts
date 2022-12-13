import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayAtomicSimple = _test_assertParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssertParse<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);