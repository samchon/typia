import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assertGuard_ObjectHttpCommentTag = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.assertGuard<ObjectHttpCommentTag>(input),
  );
