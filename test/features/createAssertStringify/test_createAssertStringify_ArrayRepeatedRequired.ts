import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createAssertStringify_ArrayRepeatedRequired =
    _test_assertStringify(
        "ArrayRepeatedRequired",
        ArrayRepeatedRequired.generate,
        typia.createAssertStringify<ArrayRepeatedRequired>(),
        ArrayRepeatedRequired.SPOILERS,
    );
