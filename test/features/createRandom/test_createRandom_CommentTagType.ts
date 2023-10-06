import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createRandom_CommentTagType = _test_random("CommentTagType")<CommentTagType>(
    CommentTagType
)({
    random: typia.createRandom<CommentTagType>(),
    assert: typia.createAssert<CommentTagType>(),
});
