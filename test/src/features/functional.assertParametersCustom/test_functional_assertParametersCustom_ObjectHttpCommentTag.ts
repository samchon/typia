import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertParametersCustom_ObjectHttpCommentTag =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
