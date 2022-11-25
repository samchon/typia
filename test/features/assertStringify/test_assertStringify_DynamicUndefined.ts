import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicUndefined = _test_assertStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.assertStringify(input),
    DynamicUndefined.SPOILERS,
);
