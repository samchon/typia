import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayRecursive =
    _test_validateStringify(
        "ArrayRecursive",
        ArrayRecursive.generate,
        TSON.createValidateStringify<ArrayRecursive>(),
        ArrayRecursive.SPOILERS,
    );
