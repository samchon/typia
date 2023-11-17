import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertGuardEquals_CommentTagType =
  _test_assertGuardEquals("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.createAssertGuardEquals<CommentTagType>(),
  );
