import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagStep = _test_equals(
    "TagStep",
    TagStep.generate,
    (input) => typia.equals(input),
);
