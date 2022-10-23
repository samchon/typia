import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_step = _test_validate_equals(
    "step tag",
    TagStep.generate,
    TSON.createValidateEquals<TagStep>(),
);
