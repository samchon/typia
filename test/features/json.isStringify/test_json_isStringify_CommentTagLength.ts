import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_isStringify_CommentTagLength = _test_json_isStringify(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
    typia.json.isStringify<CommentTagLength>(input),
);
