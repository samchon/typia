import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createDecode_CommentTagArray = _test_protobuf_decode(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
  decode: (input) => typia.protobuf.decode<CommentTagArray>(input),
  encode: typia.protobuf.createEncode<CommentTagArray>(),
});
