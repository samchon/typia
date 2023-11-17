import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertGuard_CommentTagPattern = _test_assertGuard(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
  typia.createAssertGuard<CommentTagPattern>(),
);
