import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_isPrune_ObjectHttpCommentTag = (): void =>
  _test_misc_isPrune("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input) => typia.misc.isPrune<ObjectHttpCommentTag>(input));
