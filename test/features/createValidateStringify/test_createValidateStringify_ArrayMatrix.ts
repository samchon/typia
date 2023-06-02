import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createValidateStringify_ArrayMatrix = _test_validateStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidateStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
