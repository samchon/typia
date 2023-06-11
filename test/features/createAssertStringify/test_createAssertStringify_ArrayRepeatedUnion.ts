import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssertStringify_ArrayRepeatedUnion =
    _test_assertStringify(
        "ArrayRepeatedUnion",
        ArrayRepeatedUnion.generate,
        typia.createAssertStringify<ArrayRepeatedUnion>(),
        ArrayRepeatedUnion.SPOILERS,
    );
