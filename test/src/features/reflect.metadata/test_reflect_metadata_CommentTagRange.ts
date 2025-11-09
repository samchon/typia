import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_reflect_metadata_CommentTagRange = (): void =>
  _test_reflect_metadata("CommentTagRange")(
    typia.reflect.metadata<[CommentTagRange]>(),
  );
