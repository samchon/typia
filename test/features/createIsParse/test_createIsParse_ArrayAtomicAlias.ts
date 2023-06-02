import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createIsParse_ArrayAtomicAlias = _test_isParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createIsParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
