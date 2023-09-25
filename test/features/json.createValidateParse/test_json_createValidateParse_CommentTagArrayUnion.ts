import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createValidateParse_CommentTagArrayUnion =
    _test_json_validateParse("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )(typia.json.createValidateParse<CommentTagArrayUnion>());
