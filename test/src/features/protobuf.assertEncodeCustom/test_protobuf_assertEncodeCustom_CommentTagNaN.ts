import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_assertEncodeCustom_CommentTagNaN = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagNaN>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
  });
