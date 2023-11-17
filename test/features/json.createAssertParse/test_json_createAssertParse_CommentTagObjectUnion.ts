import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createAssertParse_CommentTagObjectUnion =
  _test_json_assertParse("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.json.createAssertParse<CommentTagObjectUnion>());
