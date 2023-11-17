import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertGuard_CommentTagNaN = _test_assertGuard(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.createAssertGuard<CommentTagNaN>());
