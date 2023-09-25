import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createValidateParse_CommentTagFormat =
    _test_json_validateParse("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )(typia.json.createValidateParse<CommentTagFormat>());
