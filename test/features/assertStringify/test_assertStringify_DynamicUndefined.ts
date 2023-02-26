import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assertStringify_DynamicUndefined = _test_assertStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.assertStringify(input),
    DynamicUndefined.SPOILERS,
);
