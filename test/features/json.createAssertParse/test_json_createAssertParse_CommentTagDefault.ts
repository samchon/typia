import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createAssertParse_CommentTagDefault = _test_json_assertParse(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.json.createAssertParse<CommentTagDefault>());
