import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_is_CommentTagArrayUnion = _test_is(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createIs<CommentTagArrayUnion>(),
);
