import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createValidateEquals_CommentTagObjectUnion = (): void => _test_validateEquals(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.createValidateEquals<CommentTagObjectUnion>());
