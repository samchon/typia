import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createAssertEncodeCustom_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
      message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
    });
