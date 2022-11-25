import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayAtomicAlias = _test_validateEquals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createValidateEquals<ArrayAtomicAlias>(),
);