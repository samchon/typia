import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayAtomicSimple = _test_random(
    "ArrayAtomicSimple",
    () => typia.random<ArrayAtomicSimple>(),
    typia.createAssert<ArrayAtomicSimple>(),
);
