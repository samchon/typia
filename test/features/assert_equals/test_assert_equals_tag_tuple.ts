import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_tag_tuple = _test_assert_equals(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.assertEquals(input),
);
