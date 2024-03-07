import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectHttpCommentTag =
  _test_functional_assertFunction(CustomGuardError)("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
