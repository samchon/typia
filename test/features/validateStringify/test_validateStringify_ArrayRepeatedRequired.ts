import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_validateStringify_ArrayRepeatedRequired =
    _test_validateStringify(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        (input) => typia.validateStringify<ArrayRepeatedRequired>(input),
        ArrayRepeatedRequired.SPOILERS,
    );
