import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_assertDecodeCustom_CommentTagNaN = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagNaN>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
