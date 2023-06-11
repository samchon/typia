import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createRandom_ArrayAtomicAlias = _test_random(
    "ArrayAtomicAlias",
    typia.createRandom<ArrayAtomicAlias>(),
    typia.createAssert<typia.Primitive<ArrayAtomicAlias>>(),
);
