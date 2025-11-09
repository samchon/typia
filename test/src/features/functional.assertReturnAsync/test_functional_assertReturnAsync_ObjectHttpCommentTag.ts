import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertReturnAsync_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      typia.functional.assertReturn(p),
    );
