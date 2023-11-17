import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuardEquals_CommentTagFormat =
  _test_assertGuardEquals("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssertGuardEquals<CommentTagFormat>());
