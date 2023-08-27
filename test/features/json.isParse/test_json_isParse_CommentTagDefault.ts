import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_isParse_CommentTagDefault = _test_json_isParse(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.json.isParse<CommentTagDefault>(input),
);
