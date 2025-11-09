import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_CommentTagFormat = (): void => _test_json_assertParse(TypeGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.json.createAssertParse<CommentTagFormat>());
