import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createIs_ObjectHttpCommentTag = (): void => _test_is(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.createIs<ObjectHttpCommentTag>());
