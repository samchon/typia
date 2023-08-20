import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagStep } from "../../structures/TagStep";

export const test_assertClone_TagStep = _test_assertClone(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertClone<TagStep>(input),
    TagStep.SPOILERS,
);
