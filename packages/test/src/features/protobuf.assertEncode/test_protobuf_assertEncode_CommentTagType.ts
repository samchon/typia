import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertEncode_CommentTagType =
  _test_protobuf_assertEncode("CommentTagType")<CommentTagType>(CommentTagType)(
    {
      encode: (input) => typia.protobuf.assertEncode<CommentTagType>(input),
      decode: typia.protobuf.createDecode<CommentTagType>(),
      message: typia.protobuf.message<CommentTagType>(),
    },
  );
