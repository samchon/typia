import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createIsDecode_CommentTagPattern =
  _test_protobuf_isDecode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    decode: typia.protobuf.createIsDecode<CommentTagPattern>(),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
  });
