import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_isClone_CommentTagArrayUnion = _test_misc_isClone(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.misc.isClone<CommentTagArrayUnion>(input),
);
