import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ArrayAtomicAlias = _test_random(
    "ArrayAtomicAlias",
    typia.createRandom<ArrayAtomicAlias>(),
    typia.createAssert<ArrayAtomicAlias>(),
);
