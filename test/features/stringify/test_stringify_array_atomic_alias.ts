import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_array_atomic_alias = _test_stringify(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    (input) => TSON.stringify(input),
);
