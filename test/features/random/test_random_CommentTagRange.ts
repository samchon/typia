import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_random_CommentTagRange = _test_random("CommentTagRange")<CommentTagRange>(
    CommentTagRange
)({
    random: () => typia.random<CommentTagRange>(),
    assert: typia.createAssert<CommentTagRange>(),
});
