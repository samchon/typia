import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createRandom_ObjectHttpCommentTag = _test_random("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)({
    random: typia.createRandom<ObjectHttpCommentTag>(),
    assert: typia.createAssert<ObjectHttpCommentTag>(),
});
