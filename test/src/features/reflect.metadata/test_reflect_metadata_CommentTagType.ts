import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_reflect_metadata_CommentTagType = _test_reflect_metadata(
  "CommentTagType",
)(typia.reflect.metadata<[CommentTagType]>());
