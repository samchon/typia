import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_reflect_metadata_CommentTagFormat = (): void =>
  _test_reflect_metadata("CommentTagFormat")(
    typia.reflect.metadata<[CommentTagFormat]>(),
  );
