import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagStep } from "../../structures/TagStep";

export const test_isClone_TagStep = _test_isClone(
    "TagStep",
    TagStep.generate,
    (input) => typia.isClone<TagStep>(input),
    TagStep.SPOILERS,
);
