import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsFunctionCustom_ObjectHttpCommentTag =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectHttpCommentTag",
  )(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
