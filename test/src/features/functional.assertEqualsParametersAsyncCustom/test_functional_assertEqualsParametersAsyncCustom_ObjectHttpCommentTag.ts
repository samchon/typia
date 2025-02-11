import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpCommentTag =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHttpCommentTag",
  )(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
