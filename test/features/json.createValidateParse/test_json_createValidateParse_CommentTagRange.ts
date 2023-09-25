import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createValidateParse_CommentTagRange =
    _test_json_validateParse("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )(typia.json.createValidateParse<CommentTagRange>());
