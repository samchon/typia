import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertParametersAsync_ObjectHttpCommentTag =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ObjectHttpCommentTag",
  )(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      typia.functional.assertParameters(p),
  );
