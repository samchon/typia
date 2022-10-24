import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tag_step = _test_stringify(
    "step tag",
    TagStep.generate,
    TSON.createStringify<TagStep>(),
);
