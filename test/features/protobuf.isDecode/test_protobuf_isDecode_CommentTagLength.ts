import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createIsDecode_CommentTagLength =
  _test_protobuf_isDecode("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagLength>(input),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
  });
