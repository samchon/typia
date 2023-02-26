import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertClone_ArrayAtomicSimple = _test_assertClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssertClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
