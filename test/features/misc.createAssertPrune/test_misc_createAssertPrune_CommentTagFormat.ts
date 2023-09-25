import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createAssertPrune_CommentTagFormat =
    _test_misc_assertPrune("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )(typia.misc.createAssertPrune<CommentTagFormat>());
