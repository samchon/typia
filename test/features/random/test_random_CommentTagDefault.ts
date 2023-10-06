import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_random_CommentTagDefault = _test_random("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault
)({
    random: () => typia.random<CommentTagDefault>(),
    assert: typia.createAssert<CommentTagDefault>(),
});
