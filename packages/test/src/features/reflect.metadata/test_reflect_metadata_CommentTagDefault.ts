import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_reflect_metadata_CommentTagDefault = _test_reflect_metadata(
  "CommentTagDefault",
)(typia.reflect.metadata<[CommentTagDefault]>());
