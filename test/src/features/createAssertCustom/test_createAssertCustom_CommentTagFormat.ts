import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagFormat = (): void => _test_assert(CustomGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.createAssert<CommentTagFormat>((p) => new CustomGuardError(p)));
