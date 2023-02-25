import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagStep = _test_isPrune(
    "TagStep",
    TagStep.generate,
    typia.createIsPrune<TagStep>(),
    TagStep.SPOILERS,
);
