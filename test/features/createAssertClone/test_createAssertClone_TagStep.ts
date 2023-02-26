import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagStep } from "../../structures/TagStep";

export const test_createAssertClone_TagStep = _test_assertClone(
    "TagStep",
    TagStep.generate,
    typia.createAssertClone<TagStep>(),
    TagStep.SPOILERS,
);
