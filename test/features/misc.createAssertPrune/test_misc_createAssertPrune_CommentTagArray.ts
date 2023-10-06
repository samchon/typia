import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createAssertPrune_CommentTagArray =
    _test_misc_assertPrune("CommentTagArray")<CommentTagArray>(CommentTagArray)(
        typia.misc.createAssertPrune<CommentTagArray>(),
    );
