import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_validateStringify_CommentTagArrayUnion =
    _test_json_validateStringify("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )(typia.json.createValidateStringify<CommentTagArrayUnion>());
