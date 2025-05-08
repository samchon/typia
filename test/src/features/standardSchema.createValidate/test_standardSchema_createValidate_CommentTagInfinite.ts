import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_standardSchema_createValidate_CommentTagInfinite = _test_standardSchema_validate(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createValidate<CommentTagInfinite>());
