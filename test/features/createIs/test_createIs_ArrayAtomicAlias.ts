import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayAtomicAlias = _test_is(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createIs<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
