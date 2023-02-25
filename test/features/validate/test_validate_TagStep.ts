import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagStep = _test_validate(
    "TagStep",
    TagStep.generate,
    (input) => typia.validate(input),
    TagStep.SPOILERS,
);
