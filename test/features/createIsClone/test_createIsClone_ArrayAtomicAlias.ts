import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayAtomicAlias = _test_isClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createIsClone<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);