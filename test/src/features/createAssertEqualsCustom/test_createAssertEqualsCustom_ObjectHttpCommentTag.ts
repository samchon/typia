import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createAssertEqualsCustom_ObjectHttpCommentTag =
  _test_assertEquals(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.createAssertEquals<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
