import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createPrune_ObjectHttpCommentTag = (): void => _test_misc_prune(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.misc.createPrune<ObjectHttpCommentTag>());
