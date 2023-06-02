import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagStep } from "../../structures/TagStep";

export const test_createValidateClone_TagStep = _test_validateClone(
    "TagStep",
    TagStep.generate,
    typia.createValidateClone<TagStep>(),
    TagStep.SPOILERS,
);
