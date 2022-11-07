import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_step = _test_assert_type(
    "step tag",
    TagStep.generate,
    (input) => TSON.assertType(input),
    TagStep.SPOILERS,
);
