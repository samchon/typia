import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createIsEncode_CommentTagType =
  _test_protobuf_isEncode("CommentTagType")<CommentTagType>(CommentTagType)({
    encode: (input) => typia.protobuf.isEncode<CommentTagType>(input),
    decode: typia.protobuf.createDecode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
  });
