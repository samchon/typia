import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagStep } from "../../structures/TagStep";

export const test_createIsParse_TagStep = _test_isParse(
    "TagStep",
    TagStep.generate,
    typia.createIsParse<TagStep>(),
    TagStep.SPOILERS,
);
