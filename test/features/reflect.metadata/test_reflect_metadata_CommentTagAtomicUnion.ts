import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_reflect_metadata_CommentTagAtomicUnion =
  _test_reflect_metadata("CommentTagAtomicUnion")(
    typia.reflect.metadata<[CommentTagAtomicUnion]>(),
  );
