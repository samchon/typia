import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createRandom_ArrayAtomicSimple = _test_random(
    "ArrayAtomicSimple",
    typia.createRandom<ArrayAtomicSimple>(),
    typia.createAssert<typia.Primitive<ArrayAtomicSimple>>(),
);
