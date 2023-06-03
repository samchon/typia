import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_validateStringify_ArrayRepeatedNullable =
    _test_validateStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input) => typia.validateStringify(input),
        ArrayRepeatedNullable.SPOILERS,
    );
