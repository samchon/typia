import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagStep = _test_assert(
    "TagStep",
    TagStep.generate,
    TSON.createAssert<TagStep>(),
    TagStep.SPOILERS,
);