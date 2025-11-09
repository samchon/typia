import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsReturnAsync_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ObjectHttpCommentTag",
    )(ObjectHttpCommentTag)(
      (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
        typia.functional.assertEqualsReturn(p),
    );
