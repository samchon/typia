import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertParametersAsyncCustom_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectHttpCommentTag",
    )(ObjectHttpCommentTag)(
      (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
