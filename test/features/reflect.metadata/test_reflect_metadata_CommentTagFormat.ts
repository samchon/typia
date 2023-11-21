import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_reflect_metadata_CommentTagFormat = _test_reflect_metadata(
  "CommentTagFormat",
)(typia.reflect.metadata<[CommentTagFormat]>());
