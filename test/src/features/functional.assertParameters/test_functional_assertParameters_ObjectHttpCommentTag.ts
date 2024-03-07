import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHttpCommentTag =
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
    typia.functional.assertParameters(p),
  );
