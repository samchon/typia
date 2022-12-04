import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArraySimple = _test_validateStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.validateStringify(input),
    ArraySimple.SPOILERS,
);
