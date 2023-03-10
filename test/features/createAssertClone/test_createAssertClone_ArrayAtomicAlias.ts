import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertClone_ArrayAtomicAlias = _test_assertClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertClone<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
