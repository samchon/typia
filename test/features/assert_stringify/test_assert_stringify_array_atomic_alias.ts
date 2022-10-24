import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_array_atomic_alias = _test_assert_stringify(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
