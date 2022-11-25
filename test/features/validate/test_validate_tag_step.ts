import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_tag_step = _test_validate(
    "step tag",
    TagStep.generate,
    (input) => TSON.validate(input),
    TagStep.SPOILERS,
);
