import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createIsStringify_ArrayAtomicAlias = _test_isStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createIsStringify<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
