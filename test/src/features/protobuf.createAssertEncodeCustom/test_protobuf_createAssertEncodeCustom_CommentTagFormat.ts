import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createAssertEncodeCustom_CommentTagFormat =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)({
    encode: typia.protobuf.createAssertEncode<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
    message: typia.protobuf.message<CommentTagFormat>(),
  });
