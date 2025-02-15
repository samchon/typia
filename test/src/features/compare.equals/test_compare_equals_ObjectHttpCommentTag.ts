import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_compare_equals_ObjectHttpCommentTag = _test_compare_equals(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((a, b) => typia.compare.equals<ObjectHttpCommentTag>(a, b));
