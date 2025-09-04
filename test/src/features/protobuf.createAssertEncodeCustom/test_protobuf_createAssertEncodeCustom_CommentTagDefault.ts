import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertEncodeCustom_CommentTagDefault =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "CommentTagDefault",
    )<CommentTagDefault>(CommentTagDefault)({
      encode: typia.protobuf.createAssertEncode<CommentTagDefault>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<CommentTagDefault>(),
      message: typia.protobuf.message<CommentTagDefault>(),
    });
