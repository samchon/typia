import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_assertDecode_CommentTagFormat =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagFormat>(input),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
  });
