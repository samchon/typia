import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
