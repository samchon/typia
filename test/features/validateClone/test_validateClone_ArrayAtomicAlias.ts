import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_validateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validateClone(input),
    ArrayAtomicAlias.SPOILERS,
);
