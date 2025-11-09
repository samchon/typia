import typia from "typia";
import { CommentTagPattern } from "../../structures/CommentTagPattern";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagPattern = (): void =>
  _test_reflect_metadata("CommentTagPattern")(
    typia.reflect.metadata<[CommentTagPattern]>()
  );