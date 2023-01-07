import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assertStringify(input),
    DynamicSimple.SPOILERS,
);