import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertEncodeCustom_CommentTagPattern =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "CommentTagPattern",
    )<CommentTagPattern>(CommentTagPattern)({
      encode: typia.protobuf.createAssertEncode<CommentTagPattern>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<CommentTagPattern>(),
      message: typia.protobuf.message<CommentTagPattern>(),
    });
