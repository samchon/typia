import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsParametersAsync_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectHttpCommentTag",
    )(ObjectHttpCommentTag)(
      (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
        typia.functional.assertEqualsParameters(p),
    );
