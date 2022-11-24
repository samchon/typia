import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_tag_step = _test_assert_equals(
    "step tag",
    TagStep.generate,
    TSON.createAssertEquals<TagStep>(),
);
