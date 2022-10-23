import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is } from "./../is/_test_is";

export const test_create_is_array_alias = _test_is(
    "atomic alias array",
    ArrayAtomicAlias.generate,
    TSON.createIs<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
