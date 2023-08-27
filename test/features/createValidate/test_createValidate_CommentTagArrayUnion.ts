import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_validate_CommentTagArrayUnion = _test_validate(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createValidate<CommentTagArrayUnion>(),
);
