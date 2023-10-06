import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_isStringify_CommentTagType = _test_json_isStringify(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.json.isStringify<CommentTagType>(input));
