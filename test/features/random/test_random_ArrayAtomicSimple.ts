import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_random_ArrayAtomicSimple = _test_random(
    "ArrayAtomicSimple",
    () => typia.random<ArrayAtomicSimple>(),
    typia.createAssert<typia.Primitive<ArrayAtomicSimple>>(),
);
