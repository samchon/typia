import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagStep = _test_validateClone(
    "TagStep",
    TagStep.generate,
    TSON.createValidateClone<TagStep>(),
    TagStep.SPOILERS,
);
