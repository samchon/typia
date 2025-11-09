import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagType = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createAssertEquals<CommentTagType>((p) => new CustomGuardError(p)));
