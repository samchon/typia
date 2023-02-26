import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagStep } from "../../structures/TagStep";

export const test_is_TagStep = _test_is(
    "TagStep",
    TagStep.generate,
    (input) => typia.is(input),
    TagStep.SPOILERS,
);
