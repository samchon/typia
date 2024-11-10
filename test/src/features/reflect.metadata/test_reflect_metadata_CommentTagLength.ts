import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_reflect_metadata_CommentTagLength = _test_reflect_metadata(
  "CommentTagLength",
)(typia.reflect.metadata<[CommentTagLength]>());
