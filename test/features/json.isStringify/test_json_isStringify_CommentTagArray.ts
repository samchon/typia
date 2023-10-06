import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_isStringify_CommentTagArray = _test_json_isStringify(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.json.isStringify<CommentTagArray>(input),
);
