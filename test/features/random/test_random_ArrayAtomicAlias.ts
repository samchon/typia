import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayAtomicAlias = _test_random(
    "ArrayAtomicAlias",
    () => typia.random<ArrayAtomicAlias>(),
    typia.createAssert<ArrayAtomicAlias>(),
);
