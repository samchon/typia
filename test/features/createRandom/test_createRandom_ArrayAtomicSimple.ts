import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ArrayAtomicSimple = _test_random(
    "ArrayAtomicSimple",
    typia.createRandom<ArrayAtomicSimple>(),
typia.createAssert<typia.Primitive<ArrayAtomicSimple>>(),
);
