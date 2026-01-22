import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertEncodeCustom_CommentTagArray =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "CommentTagArray",
    )<CommentTagArray>(CommentTagArray)({
      encode: typia.protobuf.createAssertEncode<CommentTagArray>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<CommentTagArray>(),
      message: typia.protobuf.message<CommentTagArray>(),
    });
