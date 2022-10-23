import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_step = _test_assert(
    "step tag",
    TagStep.generate,
    (input) => TSON.assertType(input),
    TagStep.SPOILERS,
);
