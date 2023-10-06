import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createValidateStringify_CommentTagFormat = _test_json_validateStringify(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.json.createValidateStringify<CommentTagFormat>());
