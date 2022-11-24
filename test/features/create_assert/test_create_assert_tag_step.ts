import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_tag_step = _test_assert(
    "step tag",
    TagStep.generate,
    TSON.createAssert<TagStep>(),
    TagStep.SPOILERS,
);
