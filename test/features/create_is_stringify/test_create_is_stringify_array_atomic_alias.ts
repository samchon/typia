import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_array_atomic_alias = _test_is_stringify(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createIsStringify<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
