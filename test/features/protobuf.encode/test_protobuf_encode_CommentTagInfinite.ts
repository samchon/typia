import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createEncode_CommentTagInfinite =
  _test_protobuf_encode("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )({
    encode: (input) => typia.protobuf.encode<CommentTagInfinite>(input),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
  });
