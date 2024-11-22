import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_application_v3_1_CommentTagObjectUnion =
  _test_json_application({
    version: "3.1",
    name: "CommentTagObjectUnion",
  })(typia.json.application<CommentTagObjectUnionApplication, "3.1">());

interface CommentTagObjectUnionApplication {
  insert(first: CommentTagObjectUnion): Promise<void>;
  reduce(
    first: CommentTagObjectUnion,
    second: CommentTagObjectUnion | null,
  ): Promise<CommentTagObjectUnion>;
  coalesce(
    first: CommentTagObjectUnion | null,
    second: CommentTagObjectUnion | null,
    third?: CommentTagObjectUnion | null,
  ): Promise<CommentTagObjectUnion | null>;
}
