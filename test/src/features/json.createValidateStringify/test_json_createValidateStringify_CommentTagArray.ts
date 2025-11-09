import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createValidateStringify_CommentTagArray = (): void => _test_json_validateStringify(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.json.createValidateStringify<CommentTagArray>());
