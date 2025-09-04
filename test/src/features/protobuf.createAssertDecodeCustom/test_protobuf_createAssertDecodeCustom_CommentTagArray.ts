import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertDecodeCustom_CommentTagArray =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "CommentTagArray",
    )<CommentTagArray>(CommentTagArray)({
      decode: typia.protobuf.createAssertDecode<CommentTagArray>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<CommentTagArray>(),
    });
