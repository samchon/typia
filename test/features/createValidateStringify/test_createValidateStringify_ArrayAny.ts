import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createValidateStringify_ArrayAny = _test_validateStringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidateStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
