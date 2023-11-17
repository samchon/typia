import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertGuardEquals_CommentTagObjectUnion =
  _test_assertGuardEquals("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.assertGuardEquals<CommentTagObjectUnion>(input));
