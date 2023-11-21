import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createEncode_CommentTagDefault =
  _test_protobuf_encode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    message: typia.protobuf.message<CommentTagDefault>(),
  });
