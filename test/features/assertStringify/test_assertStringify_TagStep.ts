import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagStep } from "../../structures/TagStep";

export const test_assertStringify_TagStep = _test_assertStringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertStringify(input),
    TagStep.SPOILERS,
);
