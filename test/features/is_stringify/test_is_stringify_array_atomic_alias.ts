import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_array_atomic_alias = _test_is_stringify(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.isStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
