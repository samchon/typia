import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_isClone_ArrayAtomicAlias = _test_isClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isClone<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
