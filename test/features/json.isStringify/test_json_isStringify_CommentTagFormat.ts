import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_isStringify_CommentTagFormat = _test_json_isStringify(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.json.isStringify<CommentTagFormat>(input),
);
