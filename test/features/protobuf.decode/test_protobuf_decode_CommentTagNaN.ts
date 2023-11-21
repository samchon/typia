import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createDecode_CommentTagNaN = _test_protobuf_decode(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
  decode: (input) => typia.protobuf.decode<CommentTagNaN>(input),
  encode: typia.protobuf.createEncode<CommentTagNaN>(),
});
