import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createIsClone_ArrayAtomicSimple = _test_isClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createIsClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
