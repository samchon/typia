import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createAssertDecodeCustom_CommentTagInfinite =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "CommentTagInfinite",
    )<CommentTagInfinite>(CommentTagInfinite)({
      decode: typia.protobuf.createAssertDecode<CommentTagInfinite>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<CommentTagInfinite>(),
    });
