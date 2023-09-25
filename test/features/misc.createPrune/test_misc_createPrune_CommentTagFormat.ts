import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createPrune_CommentTagFormat = _test_misc_prune(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
    typia.misc.createPrune<CommentTagFormat>(),
);
