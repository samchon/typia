import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_CommentTagPattern = (): void => _test_json_assertStringify(CustomGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.json.assertStringify<CommentTagPattern>(input, (p) => new CustomGuardError(p)));
