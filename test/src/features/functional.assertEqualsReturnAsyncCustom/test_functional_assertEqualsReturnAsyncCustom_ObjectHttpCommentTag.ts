import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpCommentTag =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectHttpCommentTag",
  )(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
