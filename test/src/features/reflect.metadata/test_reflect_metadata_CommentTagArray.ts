import typia from "typia";
import { CommentTagArray } from "../../structures/CommentTagArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagArray = _test_reflect_metadata(
  "CommentTagArray",
)(typia.reflect.metadata<[CommentTagArray]>());
