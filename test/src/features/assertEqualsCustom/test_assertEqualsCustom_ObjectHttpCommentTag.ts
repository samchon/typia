import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assertEqualsCustom_ObjectHttpCommentTag = _test_assertEquals(
  CustomGuardError,
)("ObjectHttpCommentTag")<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  typia.assertEquals<ObjectHttpCommentTag>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
