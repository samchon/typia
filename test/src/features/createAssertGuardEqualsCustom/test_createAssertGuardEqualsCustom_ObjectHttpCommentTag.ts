import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createAssertGuardEqualsCustom_ObjectHttpCommentTag =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.createAssertGuardEquals<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
