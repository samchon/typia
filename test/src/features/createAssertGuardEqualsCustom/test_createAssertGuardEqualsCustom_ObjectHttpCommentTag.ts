import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectHttpCommentTag =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.createAssertGuardEquals<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
