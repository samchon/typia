import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_equals_ObjectHttpCommentTag = _test_equals(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.equals<ObjectHttpCommentTag>(input));
