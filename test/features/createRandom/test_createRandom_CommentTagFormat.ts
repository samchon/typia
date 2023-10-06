import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createRandom_CommentTagFormat = _test_random("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat
)({
    random: typia.createRandom<CommentTagFormat>(),
    assert: typia.createAssert<CommentTagFormat>(),
});
