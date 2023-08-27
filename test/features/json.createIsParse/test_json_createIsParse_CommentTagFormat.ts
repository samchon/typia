import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_isParse_CommentTagFormat = _test_json_isParse(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
    typia.json.createIsParse<CommentTagFormat>(),
);
