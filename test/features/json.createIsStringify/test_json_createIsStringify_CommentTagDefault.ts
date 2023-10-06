import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createIsStringify_CommentTagDefault = _test_json_isStringify(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.json.createIsStringify<CommentTagDefault>());
