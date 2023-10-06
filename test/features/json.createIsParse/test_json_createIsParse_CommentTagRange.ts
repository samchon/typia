import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createIsParse_CommentTagRange = _test_json_isParse(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)(
    typia.json.createIsParse<CommentTagRange>(),
);
