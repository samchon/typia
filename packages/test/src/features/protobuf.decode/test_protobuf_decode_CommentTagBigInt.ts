import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createDecode_CommentTagBigInt =
  _test_protobuf_decode("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    {
      decode: (input) => typia.protobuf.decode<CommentTagBigInt>(input),
      encode: typia.protobuf.createEncode<CommentTagBigInt>(),
    },
  );
