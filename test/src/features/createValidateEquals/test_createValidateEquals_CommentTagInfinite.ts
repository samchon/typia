import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createValidateEquals_CommentTagInfinite = (): void => _test_validateEquals(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createValidateEquals<CommentTagInfinite>());
