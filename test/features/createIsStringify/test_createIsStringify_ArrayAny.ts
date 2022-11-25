import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayAny = _test_isStringify(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createIsStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
