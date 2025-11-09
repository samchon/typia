import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_CommentTagArray = (): void => _test_json_assertStringify(TypeGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.json.assertStringify<CommentTagArray>(input));
