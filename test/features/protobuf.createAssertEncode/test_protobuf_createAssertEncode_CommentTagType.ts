import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertEncode_CommentTagType =
  _test_protobuf_assertEncode("CommentTagType")<CommentTagType>(CommentTagType)(
    {
      encode: typia.protobuf.createAssertEncode<CommentTagType>(),
      decode: typia.protobuf.createDecode<CommentTagType>(),
      message: typia.protobuf.message<CommentTagType>(),
    },
  );
