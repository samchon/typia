import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidateClone_ArrayAtomicSimple = _test_validateClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createValidateClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
