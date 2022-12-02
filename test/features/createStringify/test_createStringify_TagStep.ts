import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagStep = _test_stringify(
    "TagStep",
    TagStep.generate,
    TSON.createStringify<TagStep>(),
);
