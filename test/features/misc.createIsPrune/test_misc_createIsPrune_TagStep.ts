import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagStep } from "../../structures/TagStep";

export const test_misc_isPrune_TagStep = _test_misc_isPrune(
    "TagStep",
    TagStep.generate,
    typia.misc.createIsPrune<TagStep>(),
    TagStep.SPOILERS,
);
