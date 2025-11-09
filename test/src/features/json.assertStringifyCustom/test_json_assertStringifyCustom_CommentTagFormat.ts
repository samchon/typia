import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_CommentTagFormat = (): void => _test_json_assertStringify(CustomGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.json.assertStringify<CommentTagFormat>(input, (p) => new CustomGuardError(p)));
