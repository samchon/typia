import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_atomic_alias = _test_stringify(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createStringify<ArrayAtomicAlias>(),
);
