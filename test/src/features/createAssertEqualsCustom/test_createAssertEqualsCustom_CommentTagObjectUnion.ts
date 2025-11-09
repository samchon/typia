import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagObjectUnion = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.createAssertEquals<CommentTagObjectUnion>((p) => new CustomGuardError(p)));
