import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_assertPruneCustom_ObjectHttpCommentTag = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.misc.assertPrune<ObjectHttpCommentTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
