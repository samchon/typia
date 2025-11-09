import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_CommentTagDefault = (): void => _test_json_assertStringify(CustomGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.json.assertStringify<CommentTagDefault>(input, (p) => new CustomGuardError(p)));
