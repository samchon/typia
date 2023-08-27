import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_assertPrune_CommentTagPattern = _test_misc_assertPrune(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
    typia.misc.createAssertPrune<CommentTagPattern>(),
);
