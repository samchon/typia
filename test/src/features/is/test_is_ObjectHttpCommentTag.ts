import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_is_ObjectHttpCommentTag = (): void => _test_is(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.is<ObjectHttpCommentTag>(input));
