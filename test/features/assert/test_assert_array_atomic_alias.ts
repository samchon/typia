import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_array_alias = _test_assert(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertType(input),
);
