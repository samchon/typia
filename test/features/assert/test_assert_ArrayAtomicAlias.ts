import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayAtomicAlias = _test_assert(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.assert(input),
    ArrayAtomicAlias.SPOILERS,
);
