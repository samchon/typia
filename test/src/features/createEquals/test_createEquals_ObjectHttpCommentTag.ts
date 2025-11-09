import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createEquals_ObjectHttpCommentTag = (): void => _test_equals(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.createEquals<ObjectHttpCommentTag>());
