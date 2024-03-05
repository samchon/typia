import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createAssertPruneCustom_ObjectHttpCommentTag =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.misc.createAssertPrune<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
