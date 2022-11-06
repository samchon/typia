import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_atomic_alias = _test_assert_clone(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertClone(input),
    ArrayAtomicAlias.SPOILERS,
);
