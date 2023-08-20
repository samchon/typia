import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagStep } from "../../structures/TagStep";

export const test_isPrune_TagStep = _test_isPrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.isPrune<TagStep>(input),
    TagStep.SPOILERS,
);
