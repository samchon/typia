import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_validateStringify_ArrayAtomicAlias = _test_validateStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validateStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
