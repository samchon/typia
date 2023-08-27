import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assert_CommentTagNaN = _test_assert(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) => typia.assert<CommentTagNaN>(input));
