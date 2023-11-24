import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_assertPrune_ObjectHttpCommentTag =
  _test_misc_assertPrune("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input) => typia.misc.assertPrune<ObjectHttpCommentTag>(input));
