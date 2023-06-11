import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createValidateEquals_ArrayAtomicAlias = _test_validateEquals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateEquals<ArrayAtomicAlias>(),
);
