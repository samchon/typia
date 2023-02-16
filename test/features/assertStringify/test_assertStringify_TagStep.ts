import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagStep = _test_assertStringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertStringify(input),
    TagStep.SPOILERS,
);
