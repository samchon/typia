import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ArraySimple = _test_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
