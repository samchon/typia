import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsParameters_ObjectHttpCommentTag =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectHttpCommentTag",
  )(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.assertEqualsParameters(p),
  );
