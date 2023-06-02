import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertClone_ArrayAtomicAlias = _test_assertClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.assertClone(input),
    ArrayAtomicAlias.SPOILERS,
);
