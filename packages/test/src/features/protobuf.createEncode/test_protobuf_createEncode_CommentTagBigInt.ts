import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createEncode_CommentTagBigInt =
  _test_protobuf_encode("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    {
      encode: typia.protobuf.createEncode<CommentTagBigInt>(),
      decode: typia.protobuf.createDecode<CommentTagBigInt>(),
      message: typia.protobuf.message<CommentTagBigInt>(),
    },
  );
