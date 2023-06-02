import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createClone_ArrayAtomicSimple = _test_clone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createClone<ArrayAtomicSimple>(),
);
