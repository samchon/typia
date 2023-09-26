import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createPrune_CommentTagArray = _test_misc_prune(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(typia.misc.createPrune<CommentTagArray>());
