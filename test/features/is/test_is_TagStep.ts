import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is } from "../internal/_test_is";

export const test_is_TagStep = _test_is(
    "TagStep",
    TagStep.generate,
    (input) => TSON.is(input),
    TagStep.SPOILERS,
);