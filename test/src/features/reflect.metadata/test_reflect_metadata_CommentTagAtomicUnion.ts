import typia from "typia";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagAtomicUnion = 
  _test_reflect_metadata("CommentTagAtomicUnion")(
    typia.reflect.metadata<[CommentTagAtomicUnion]>()
  );