import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagStep } from "../../structures/TagStep";

export const test_createAssertPrune_TagStep = _test_assertPrune(
    "TagStep",
    TagStep.generate,
    typia.createAssertPrune<TagStep>(),
    TagStep.SPOILERS,
);
