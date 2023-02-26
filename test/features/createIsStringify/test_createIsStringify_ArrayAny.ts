import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createIsStringify_ArrayAny = _test_isStringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.createIsStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
