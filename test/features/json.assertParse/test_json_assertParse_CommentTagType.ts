import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_assertParse_CommentTagType = _test_json_assertParse(
    "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
    typia.json.assertParse<CommentTagType>(input),
);
