import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_isStringify_ArrayAtomicAlias = _test_isStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isStringify<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
