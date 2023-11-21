import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertGuardEquals_CommentTagDefault =
  _test_assertGuardEquals("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.createAssertGuardEquals<CommentTagDefault>());
