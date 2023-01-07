import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicUndefined = _test_assertStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createAssertStringify<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);