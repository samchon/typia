import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createStringify_CommentTagArrayUnion = _test_json_stringify(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.json.createStringify<CommentTagArrayUnion>());
