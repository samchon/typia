import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createAssertGuardCustom_ObjectHttpCommentTag =
  _test_assertGuard(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.createAssertGuard<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
