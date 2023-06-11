import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagStep = _test_is(
    "TagStep",
    TagStep.generate,
    typia.createIs<TagStep>(),
    TagStep.SPOILERS,
);
