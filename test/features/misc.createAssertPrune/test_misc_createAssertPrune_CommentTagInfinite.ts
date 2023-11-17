import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_createAssertPrune_CommentTagInfinite =
  _test_misc_assertPrune("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )(typia.misc.createAssertPrune<CommentTagInfinite>());
