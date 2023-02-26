import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagStep = _test_assertPrune(
    "TagStep",
    TagStep.generate,
    typia.createAssertPrune<TagStep>(),
    TagStep.SPOILERS,
);
