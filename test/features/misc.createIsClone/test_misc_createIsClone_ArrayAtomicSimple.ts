import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_isClone_ArrayAtomicSimple = _test_misc_isClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.misc.createIsClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
