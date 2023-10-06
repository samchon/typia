import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_assertParse_CommentTagArray = _test_json_assertParse(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.json.assertParse<CommentTagArray>(input),
);
