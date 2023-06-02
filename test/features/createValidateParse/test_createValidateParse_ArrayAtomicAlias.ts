import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createValidateParse_ArrayAtomicAlias = _test_validateParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
