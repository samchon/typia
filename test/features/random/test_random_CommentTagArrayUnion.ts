import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_random_CommentTagArrayUnion = _test_random(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)({
    random: () => typia.random<CommentTagArrayUnion>(),
    assert: typia.createAssert<CommentTagArrayUnion>(),
});
