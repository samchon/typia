import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertParse_ArrayAtomicSimple = _test_assertParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssertParse<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
