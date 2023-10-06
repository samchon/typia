import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createValidateStringify_CommentTagRange =
    _test_json_validateStringify("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )(typia.json.createValidateStringify<CommentTagRange>());
