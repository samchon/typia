import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_array_atomic_alias = _test_assert_type(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertType(input),
    ArrayAtomicAlias.SPOILERS,
);
