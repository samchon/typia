import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createIsStringify_CommentTagArrayUnion = _test_json_isStringify(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.json.createIsStringify<CommentTagArrayUnion>());
