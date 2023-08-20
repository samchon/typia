import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assertStringify_DynamicNever = _test_assertStringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.assertStringify<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
