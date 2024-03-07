import typia from "typia";
import { CommentTagNaN } from "../../structures/CommentTagNaN";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagNaN = _test_reflect_metadata(
  "CommentTagNaN",
)(typia.reflect.metadata<[CommentTagNaN]>());
