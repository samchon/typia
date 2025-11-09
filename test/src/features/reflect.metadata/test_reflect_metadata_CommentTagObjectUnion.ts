import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_reflect_metadata_CommentTagObjectUnion = (): void =>
  _test_reflect_metadata("CommentTagObjectUnion")(
    typia.reflect.metadata<[CommentTagObjectUnion]>(),
  );
