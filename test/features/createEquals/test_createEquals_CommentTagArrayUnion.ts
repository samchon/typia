import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_equals_CommentTagArrayUnion = _test_equals(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createEquals<CommentTagArrayUnion>(),
);
