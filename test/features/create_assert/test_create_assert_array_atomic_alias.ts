import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_array_atomic_alias = _test_assert(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createAssert<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
