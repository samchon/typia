import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayAtomicSimple = _test_is(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createIs<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);