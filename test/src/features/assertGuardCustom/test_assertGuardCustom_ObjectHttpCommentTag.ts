import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assertGuardCustom_ObjectHttpCommentTag = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.assertGuard<ObjectHttpCommentTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
