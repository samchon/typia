import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_validateParse_CommentTagArray = _test_json_validateParse(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.json.validateParse<CommentTagArray>(input),
);
