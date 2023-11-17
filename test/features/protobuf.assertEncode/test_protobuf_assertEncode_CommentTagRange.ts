import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createAssertEncode_CommentTagRange =
  _test_protobuf_assertEncode("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )({
    encode: (input) => typia.protobuf.assertEncode<CommentTagRange>(input),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
  });
