import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagFormat = (): void => _test_assertEquals(CustomGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.createAssertEquals<CommentTagFormat>((p) => new CustomGuardError(p)));
