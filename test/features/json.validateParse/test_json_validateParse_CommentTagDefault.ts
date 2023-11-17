import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_validateParse_CommentTagDefault =
  _test_json_validateParse("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.json.validateParse<CommentTagDefault>(input));
