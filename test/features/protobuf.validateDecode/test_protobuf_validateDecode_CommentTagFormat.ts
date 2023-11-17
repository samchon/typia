import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createValidateDecode_CommentTagFormat =
  _test_protobuf_validateDecode("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )({
    decode: (input) => typia.protobuf.validateDecode<CommentTagFormat>(input),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
  });
