import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_tag_step = _test_validate(
    "step tag",
    TagStep.generate,
    TSON.createValidate<TagStep>(),
    TagStep.SPOILERS,
);
