import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayAny = _test_validateStringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidateStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
