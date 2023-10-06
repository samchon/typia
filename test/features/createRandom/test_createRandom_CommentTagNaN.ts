import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createRandom_CommentTagNaN = _test_random("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN
)({
    random: typia.createRandom<CommentTagNaN>(),
    assert: typia.createAssert<CommentTagNaN>(),
});
