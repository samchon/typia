import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertEncodeCustom_ArraySimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
      encode: typia.protobuf.createAssertEncode<ArraySimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
      message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
    });
