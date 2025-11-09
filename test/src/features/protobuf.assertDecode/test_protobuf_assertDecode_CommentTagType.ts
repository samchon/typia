import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_assertDecode_CommentTagType = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )({
    decode: (input) => typia.protobuf.assertDecode<CommentTagType>(input),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
