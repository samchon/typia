import typia from "typia";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagInfinite = (): void =>
  _test_reflect_metadata("CommentTagInfinite")(
    typia.reflect.metadata<[CommentTagInfinite]>()
  );