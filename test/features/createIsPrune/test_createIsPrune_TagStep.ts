import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagStep } from "../../structures/TagStep";

export const test_createIsPrune_TagStep = _test_isPrune(
    "TagStep",
    TagStep.generate,
    typia.createIsPrune<TagStep>(),
    TagStep.SPOILERS,
);
