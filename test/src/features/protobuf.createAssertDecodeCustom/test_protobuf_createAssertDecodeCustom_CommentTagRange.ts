import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createAssertDecodeCustom_CommentTagRange =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "CommentTagRange",
    )<CommentTagRange>(CommentTagRange)({
      decode: typia.protobuf.createAssertDecode<CommentTagRange>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<CommentTagRange>(),
    });
