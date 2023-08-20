import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assertStringify<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
