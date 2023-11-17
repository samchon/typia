import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createPrune_CommentTagPattern = _test_misc_prune(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
  typia.misc.createPrune<CommentTagPattern>(),
);
