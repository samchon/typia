import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_CommentTagPattern = (): void => _test_json_assertParse(CustomGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.json.assertParse<CommentTagPattern>(input, (p) => new CustomGuardError(p)));
