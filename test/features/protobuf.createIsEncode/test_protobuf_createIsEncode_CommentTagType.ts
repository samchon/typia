import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createIsEncode_CommentTagType =
  _test_protobuf_isEncode("CommentTagType")<CommentTagType>(CommentTagType)({
    encode: typia.protobuf.createIsEncode<CommentTagType>(),
    decode: typia.protobuf.createDecode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
  });
