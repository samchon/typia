import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_tag_matrix = _test_assert_equals(
    "matrix tag",
    TagMatrix.generate,
    TSON.createAssertEquals<TagMatrix>(),
);
