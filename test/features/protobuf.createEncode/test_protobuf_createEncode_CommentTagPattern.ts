import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createEncode_CommentTagPattern =
  _test_protobuf_encode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
