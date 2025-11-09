import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertReturnAsyncCustom_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ObjectHttpCommentTag",
    )(ObjectHttpCommentTag)(
      (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
