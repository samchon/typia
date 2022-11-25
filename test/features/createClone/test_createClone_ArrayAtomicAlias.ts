import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayAtomicAlias = _test_clone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createClone<ArrayAtomicAlias>(),
);