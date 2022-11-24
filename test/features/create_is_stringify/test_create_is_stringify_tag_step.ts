import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_step = _test_is_stringify(
    "step tag",
    TagStep.generate,
    TSON.createIsStringify<TagStep>(),
    TagStep.SPOILERS,
);
