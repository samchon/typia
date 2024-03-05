import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createAssertEncodeCustom_ObjectSimpleProtobuf =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobuf>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
  });
