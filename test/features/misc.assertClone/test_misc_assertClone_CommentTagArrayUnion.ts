import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_assertClone_CommentTagArrayUnion =
    _test_misc_assertClone("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )((input) => typia.misc.assertClone<CommentTagArrayUnion>(input));
