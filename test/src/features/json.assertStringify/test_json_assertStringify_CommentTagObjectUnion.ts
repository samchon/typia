import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_CommentTagObjectUnion = (): void => _test_json_assertStringify(TypeGuardError)(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.json.assertStringify<CommentTagObjectUnion>(input));
