import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectHttpCommentTag = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.assertEquals<ObjectHttpCommentTag>(input, (p) => new CustomGuardError(p)));
