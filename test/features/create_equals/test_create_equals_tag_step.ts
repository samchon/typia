import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_tag_step = _test_equals(
    "step tag",
    TagStep.generate,
    TSON.createEquals<TagStep>(),
);
