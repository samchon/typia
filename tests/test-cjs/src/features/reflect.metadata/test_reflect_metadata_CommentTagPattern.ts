import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_reflect_metadata_CommentTagPattern = (): void =>
  _test_reflect_metadata("CommentTagPattern")(
    typia.reflect.metadata<[CommentTagPattern]>(),
  );
