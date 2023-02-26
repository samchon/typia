import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertPrune_ArrayAtomicSimple = _test_assertPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssertPrune<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
