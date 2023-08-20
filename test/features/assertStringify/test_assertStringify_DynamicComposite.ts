import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertStringify_DynamicComposite = _test_assertStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertStringify<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
