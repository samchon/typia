import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createIsPrune_ObjectHttpCommentTag = _test_misc_isPrune(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  typia.misc.createIsPrune<ObjectHttpCommentTag>(),
);
