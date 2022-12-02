import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagStep = _test_validate(
    "TagStep",
    TagStep.generate,
    TSON.createValidate<TagStep>(),
    TagStep.SPOILERS,
);
