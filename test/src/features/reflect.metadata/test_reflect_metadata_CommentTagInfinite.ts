import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_reflect_metadata_CommentTagInfinite = (): void =>
  _test_reflect_metadata("CommentTagInfinite")(
    typia.reflect.metadata<[CommentTagInfinite]>(),
  );
