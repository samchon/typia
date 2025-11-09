import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createAssertPrune_ObjectHttpCommentTag = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.misc.createAssertPrune<ObjectHttpCommentTag>(),
  );
