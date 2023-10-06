import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createValidateStringify_CommentTagDefault = _test_json_validateStringify(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.json.createValidateStringify<CommentTagDefault>());
