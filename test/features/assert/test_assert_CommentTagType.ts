import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assert_CommentTagType = _test_assert(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.assert<CommentTagType>(input));
