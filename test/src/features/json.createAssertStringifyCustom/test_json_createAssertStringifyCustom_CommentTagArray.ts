import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_CommentTagArray = (): void => _test_json_assertStringify(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.json.createAssertStringify<CommentTagArray>((p) => new CustomGuardError(p)));
