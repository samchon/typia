import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertGuard_CommentTagObjectUnion = _test_assertGuard(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
  typia.createAssertGuard<CommentTagObjectUnion>(),
);
