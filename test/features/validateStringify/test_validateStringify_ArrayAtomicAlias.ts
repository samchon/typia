import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArrayAtomicAlias = _test_validateStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.validateStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
