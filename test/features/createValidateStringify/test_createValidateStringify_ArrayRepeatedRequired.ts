import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createValidateStringify_ArrayRepeatedRequired =
    _test_validateStringify(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        typia.createValidateStringify<ArrayRepeatedRequired>(),
        ArrayRepeatedRequired.SPOILERS,
    );
