import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createClone_CommentTagArray = _test_misc_clone(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(typia.misc.createClone<CommentTagArray>());
