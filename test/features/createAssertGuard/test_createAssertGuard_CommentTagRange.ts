import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertGuard_CommentTagRange = _test_assertGuard(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)(typia.createAssertGuard<CommentTagRange>());
