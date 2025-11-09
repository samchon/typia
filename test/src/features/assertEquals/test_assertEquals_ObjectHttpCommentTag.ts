import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assertEquals_ObjectHttpCommentTag = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.assertEquals<ObjectHttpCommentTag>(input),
  );
