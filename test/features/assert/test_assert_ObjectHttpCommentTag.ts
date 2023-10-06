import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assert_ObjectHttpCommentTag = _test_assert(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.assert<ObjectHttpCommentTag>(input));
