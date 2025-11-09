import typia from "typia";
import { CommentTagDefault } from "../../structures/CommentTagDefault";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagDefault = (): void =>
  _test_reflect_metadata("CommentTagDefault")(
    typia.reflect.metadata<[CommentTagDefault]>()
  );