import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayAtomicSimple = _test_isClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createIsClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);