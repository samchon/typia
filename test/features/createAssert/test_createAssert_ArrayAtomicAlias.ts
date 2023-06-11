import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssert_ArrayAtomicAlias = _test_assert(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssert<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
