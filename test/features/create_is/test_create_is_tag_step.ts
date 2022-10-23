import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_step = _test_is(
    "step tag",
    TagStep.generate,
    TSON.createIs<TagStep>(),
    TagStep.SPOILERS,
);
