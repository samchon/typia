import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_random_CommentTagLength = _test_random("CommentTagLength")<CommentTagLength>(
    CommentTagLength
)({
    random: () => typia.random<CommentTagLength>(),
    assert: typia.createAssert<CommentTagLength>(),
});
