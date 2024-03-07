import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectHttpCommentTag =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.misc.assertPrune<ObjectHttpCommentTag>(input),
  );
