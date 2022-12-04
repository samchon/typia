import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayMatrix = _test_validateStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    TSON.createValidateStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
