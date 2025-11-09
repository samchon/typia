import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_CommentTagType = (): void => _test_json_assertStringify(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.json.assertStringify<CommentTagType>(input, (p) => new CustomGuardError(p)));
