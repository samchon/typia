import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createValidateParse_CommentTagPattern =
  _test_json_validateParse("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.json.createValidateParse<CommentTagPattern>());
