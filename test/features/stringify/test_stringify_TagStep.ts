import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagStep } from "../../structures/TagStep";

export const test_stringify_TagStep = _test_stringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.stringify<TagStep>(input),
);
