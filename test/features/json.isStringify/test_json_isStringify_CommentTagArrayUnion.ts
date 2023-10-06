import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_isStringify_CommentTagArrayUnion =
    _test_json_isStringify("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )((input) => typia.json.isStringify<CommentTagArrayUnion>(input));
