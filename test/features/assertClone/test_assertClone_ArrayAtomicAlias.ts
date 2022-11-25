import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayAtomicAlias = _test_assertClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertClone(input),
    ArrayAtomicAlias.SPOILERS,
);