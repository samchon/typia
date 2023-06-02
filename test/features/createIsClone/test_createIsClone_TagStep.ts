import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagStep } from "../../structures/TagStep";

export const test_createIsClone_TagStep = _test_isClone(
    "TagStep",
    TagStep.generate,
    typia.createIsClone<TagStep>(),
    TagStep.SPOILERS,
);
